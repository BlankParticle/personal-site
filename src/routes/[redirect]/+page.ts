import { error, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (({ params }) => {
  const linkMap: Record<string, string> = {
    email: "mailto:hello@blankparticle.dev",
    github: "https://github.com/BlankParticle",
    linkedin: "https://www.linkedin.com/in/blankparticle",
    discord: "https://discord.com/users/1096392763144159252",
    spotify: "https://open.spotify.com/user/31krf3flzpa44udfgkc5a5xrqn7y",
    twitter: "https://twitter.com/blankparticle",
    hashnode: "https://hashnode.com/@BlankParticle",
    devto: "https://dev.to/blankparticle",
    myanimelist: "https://myanimelist.net/profile/BlankParticle",
  };

  const link = linkMap[params.redirect];
  if (link) {
    throw redirect(301, link);
  } else {
    throw error(404, "Not found");
  }
}) satisfies PageLoad;
