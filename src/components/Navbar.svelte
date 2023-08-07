<script>
  import TitleLogo from "@assets/img/TitleLogo.svg";
  import GithubLogo from "@assets/img/GithubLogo.svg";
  import LinkedInLogo from "@assets/img/LinkedInLogo.svg";
</script>

<nav class="mx-auto md:py-10 py-6 sm:px-10 px-4 flex font-body items-center">
  <div class="flex-1">
    <a href="/" title="Go to home">
      <img src={TitleLogo} alt="BlankParticle's Text Logo" class="w-56 select-none my-2" />
    </a>
  </div>
  <div class="font-semibold">
    <div class="border-r border-slate-700 pr-4 mx-4 hidden sm:block">
      <span class="mx-2 py-1">
        <a href="/blog" class="hover:text-brand hover:underline">Blog</a>
      </span>
      <!-- <span class="mx-2 py-1">
        <a href="/resume" class="hover:text-brand hover:underline">Resume</a>
      </span> -->
    </div>
  </div>
  <div class="flex ml-6 sm:ml-0">
    <a href="/github">
      <img class="w-7 block mx-2" src={GithubLogo} alt="BlankParticle's Github" />
    </a>
    <a href="/linkedin">
      <img class="w-7 block mx-2" src={LinkedInLogo} alt="BlankParticle's LinkedIn" />
    </a>
  </div>
</nav>
