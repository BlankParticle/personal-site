<script>
  import BlankParticleLogo from "@components/BlankParticleLogo.svelte";
</script>

<main class="mx-auto w-full max-w-5xl flex font-body items-center justify-center flex-col">
  <div class="flex w-4/5 justify-center items-center my-8 md:flex-row flex-col-reverse">
    <div class="flex-1">
      <h1 class="md:text-6xl text-4xl font-heading font-bold mb-1/2">Hi! I'm Rahul.</h1>
      <h2 class="md:text-xl text-lg mb-3 px-1 font-semibold text-brand">@blankparticle</h2>
      <div class="md:w-5/6 w-full">
        <p class="text-lg">
          I am a <span class="font-semibold text-brand">Software Engineer</span> based in
          <span class="font-semibold text-brand">India</span>.
        </p>
        <p class="text-lg">I work with Typescript, but I love Svelte, Rust and Linux in General.</p>
      </div>
    </div>
    <div class="md:m-0 mb-6">
      <BlankParticleLogo />
    </div>
  </div>
  <div class="md:w-3/4 w-[90%] bg-slate-700/80 md:px-8 px-5 py-4 rounded-2xl">
    <ul class="font-medium list-disc p-2 md:text-lg text-md">
      <li>
        ✨ Know More
        <a href="/about" class="text-brand underline font-semibold">about me</a>
        and
        <a href="/setup" class="text-brand underline font-semibold">my setup</a>.
      </li>
      <li>
        🚀 Find My Projects and snippets on
        <a href="/about" class="text-brand underline font-semibold">Github</a>.
      </li>
      <li>
        🎋 Contact me on
        <a href="/discord" class="text-brand underline font-semibold">Discord</a>
        or
        <a href="/email" class="text-brand underline font-semibold">Email</a>.
      </li>
      <li>
        💡 Know about my thoughts and takes on
        <a href="/blog" class="text-brand underline font-semibold">My Blog</a>.
      </li>
    </ul>
  </div>
</main>
