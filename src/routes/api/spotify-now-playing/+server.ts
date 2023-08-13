import type { RequestHandler } from "./$types";
import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
  DISCORD_WEBHOOK_URL,
} from "$env/static/private";
import { env } from "$env/dynamic/private";
import { notifyOnDiscord } from "$lib/server/notify-on-discord";
import { error } from "@sveltejs/kit";

type SpotifyAccessTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
};
type SpotifyGetTokenFn = () => Promise<{ error: true } | { error: false; token: string }>;

type SpotifyNowPlayingResponse = {
  item: {
    album: {
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    external_urls: { spotify: string };
    name: string;
  };
  is_playing: boolean;
};

type SpotifyNowPlayingFn = (
  token: string,
) => Promise<
  | { error: true }
  | { error: false; image: string; artist: string; title: string; url: string; isPlaying: boolean }
>;

const getAccessToken: SpotifyGetTokenFn = async () => {
  if (env.SPOTIFY_ACCESS_TOKEN && Number(env.SPOTIFY_ACCESS_TOKEN_EXPIRY) < Date.now()) {
    return { error: false, token: env.SPOTIFY_ACCESS_TOKEN };
  }
  try {
    const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");
    const response = await fetch(
      `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
    const res = (await response.json()) as SpotifyAccessTokenResponse;
    env.SPOTIFY_ACCESS_TOKEN = res.access_token;
    env.SPOTIFY_ACCESS_TOKEN_EXPIRY = (Date.now() + res.expires_in * 1000).toString();

    return { error: false, token: res.access_token };
  } catch (error) {
    console.log(error);
    notifyOnDiscord(DISCORD_WEBHOOK_URL, `Error getting Spotify access token: ${error}`);
    return { error: true };
  }
};

const getNowPlaying: SpotifyNowPlayingFn = async (token: string) => {
  if (env.LAST_SPOTIFY_RESPONSE && Number(env.LAST_SPOTIFY_RESPONSE_TIME) + 10000 > Date.now()) {
    return JSON.parse(env.LAST_SPOTIFY_RESPONSE);
  }
  try {
    const song_res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (song_res.status === 204) {
      return { error: false, isPlaying: false, artist: "", title: "", image: "", url: "" };
    }
    let song = (await song_res.json()) as SpotifyNowPlayingResponse;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((song as any).error) {
      song = JSON.parse(
        env.LAST_SPOTIFY_RESPONSE ||
          `{ error: false, isPlaying: false, artist: "", title: "", image: "", url: "" }`,
      );
      env.SPOTIFY_ACCESS_TOKEN = "";
      env.SPOTIFY_ACCESS_TOKEN_EXPIRY = Date.now().toString();
    }

    const image = song.item.album.images[0].url;
    const artist = song.item.artists.map((a) => a.name).join(", ");
    const title = song.item.name;
    const url = song.item.external_urls.spotify;
    const isPlaying = song.is_playing;
    const data = isPlaying
      ? { image, artist, title, url, isPlaying, error: false }
      : { error: false, isPlaying: false, artist: "", title: "", image: "", url: "" };
    if (data.isPlaying) {
      env.LAST_SPOTIFY_RESPONSE = JSON.stringify(data);
      env.LAST_SPOTIFY_RESPONSE_TIME = Date.now().toString();
    }
    return data;
  } catch (error) {
    console.log(error);
    notifyOnDiscord(DISCORD_WEBHOOK_URL, `Error getting Spotify now playing: ${error}`);
    return { error: true };
  }
};

export const GET: RequestHandler = async () => {
  const token = await getAccessToken();
  if (token.error) {
    throw error(500, JSON.stringify({ error: "Error getting Spotify access token" }));
  } else {
    const song = await getNowPlaying(token.token);
    if (song.error) {
      throw error(500, JSON.stringify({ error: "Error getting Spotify now playing" }));
    } else {
      return new Response(JSON.stringify(song));
    }
  }
};
