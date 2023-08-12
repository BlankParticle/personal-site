<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import SpotifyOriginalLogo from "@assets/img/SpotifyOriginal.svg";

  type NowPlayingResponse =
    | { error: true }
    | {
        error: false;
        image: string;
        artist: string;
        title: string;
        url: string;
        isPlaying: boolean;
      };

  const spotify = writable<NowPlayingResponse>({
    error: false,
    isPlaying: false,
    image: "",
    artist: "",
    title: "",
    url: "",
  });

  const fetchNowPlaying = async () => {
    const data = await (await fetch("/api/spotify-now-playing")).json();
    spotify.set(data);
    if (!data.error) {
      setTimeout(fetchNowPlaying, 15000);
    }
  };

  onMount(() => fetchNowPlaying());
</script>

{#if !$spotify.error}
  <div class="w-full max-w-xs rounded-2xl p-2 mt-4 mx-auto">
    {#if $spotify.isPlaying}
      <div class="flex">
        <img src={SpotifyOriginalLogo} alt="Spotify Logo" class="w-6 mx-2 select-none" />
        <span class="font-bold select-none">Now Playing</span>
      </div>
      <div class="flex my-2 px-2 border border-gray-700 rounded-2xl">
        <img
          src={$spotify.image}
          alt="Album Art"
          class="w-16 h-16 mr-4 my-2 rounded-xl"
          width="64px"
          height="64px"
        />
        <div class="flex flex-col py-2 flex-1 justify-center">
          <a class="font-semibold block" href={$spotify.url}>
            {$spotify.title.substring(0, 18)}
            <span class="text-gray-500">{$spotify.title.length >= 19 ? "..." : ""}</span>
          </a>
          <span class="text-sm block">
            {$spotify.artist.substring(0, 22)}
            <span class="text-gray-500 font-medium">
              {$spotify.artist.length >= 23 ? "..." : ""}
            </span>
          </span>
        </div>
      </div>
    {:else}
      <div class="flex justify-center">
        <img src={SpotifyOriginalLogo} alt="Spotify Logo" class="w-6 mx-2 select-none" />
        <span class="font-bold select-none">Not Playing Spotify</span>
      </div>
    {/if}
  </div>
{/if}
