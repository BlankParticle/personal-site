<script lang="ts">
  import GithubLogo from "@assets/img/GithubLogo.svg";
  import LinkedInLogo from "@assets/img/LinkedInLogo.svg";
  import TwitterLogo from "@assets/img/TwitterLogo.svg";
  import SpotifyLogo from "@assets/img/SpotifyLogo.svg";
  import DiscordLogo from "@assets/img/DiscordLogo.svg";
</script>

<footer class="my-11 flex justify-center items-center flex-col font-medium text-gray-400 gap-4">
  <div class="flex flex-wrap my-2">
    <a href="/github">
      <img
        class="w-6 block mx-4"
        src={GithubLogo}
        alt="BlankParticle's Github"
        width="24px"
        height="24px"
      />
    </a>
    <a href="/linkedin">
      <img
        class="w-6 block mx-4"
        src={LinkedInLogo}
        alt="BlankParticle's LinkedIn"
        width="24px"
        height="24px"
      />
    </a>
    <a href="/twitter">
      <img
        class="w-6 block mx-4"
        src={TwitterLogo}
        alt="BlankParticle's Twitter"
        width="24px"
        height="24px"
      />
    </a>
    <a href="/spotify">
      <img
        class="w-6 block mx-4"
        src={SpotifyLogo}
        alt="BlankParticle's Spotify"
        width="24px"
        height="24px"
      />
    </a>
    <a href="/discord">
      <img
        class="w-6 block mx-4"
        src={DiscordLogo}
        alt="BlankParticle's Discord"
        width="24px"
        height="24px"
      />
    </a>
  </div>
  <div>
    Built With <a href="https://kit.svelte.dev" class="hover:underline">SvelteKit</a>
    and
    <a href="https://tailwindcss.com" class="hover:underline">TailwindCSS</a>
  </div>
  <div>
    <a
      href="https://github.com/BlankParticle/portfolio/blob/main/LICENSE.txt"
      class="hover:underline"
    >
      MIT License
    </a>
    &copy; 2023 <a href="/github" class="hover:underline">BlankParticle</a>
  </div>
</footer>
