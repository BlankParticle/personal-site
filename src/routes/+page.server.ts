import type { PageServerLoad } from "./$types";
import { ANIME_API_TOKEN } from "$env/static/private";

type Quote = {
  quote: string;
  author: string;
  anime: string;
};

export const load: PageServerLoad = async () => {
  const url = "https://waifu.it/api/quote";
  const res = await fetch(url, {
    headers: {
      Authorization: ANIME_API_TOKEN,
    },
  });
  if (res.status !== 200) {
    // Incase of any error, return a default quote
    return {
      quote:
        "We do not stop playing games because we grow old, we grow old because we stop playing.",
      anime: "No Game No Life",
      author: "Sora",
    } as Quote;
  } else {
    const quote = await res.json();
    return quote as Quote;
  }
};
