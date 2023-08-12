<script lang="ts">
  export let quote: string;
  export let author: string;
  export let from: string;
</script>

<div class="md:w-3/4 w-[90%] md:px-12 md:py-10 mb-4 py-4 px-5 rounded-2xl">
  <div class="w-fit mb-10 mx-auto">
    <div class="text-3xl text-brand select-none text-left leading-tight h-3">“</div>
    <p class="text-lg text-gray-100 text-center px-5">
      {quote}
    </p>
    <div class="text-3xl text-brand select-none text-right leading-tight h-3 -mt-3">”</div>
  </div>
  <div class="w-full text-right">
    <p class="md:text-base text-brand font-bold italic">— {author}</p>
    <p class="text-xs text-gray-400">{from}</p>
  </div>
</div>
