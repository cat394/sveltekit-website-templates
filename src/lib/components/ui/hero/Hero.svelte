<script lang="ts">
	import type { HeadingLevel } from '$lib/types.ts';
  
  export let headingLevel: HeadingLevel = "h1";
</script>

<section class="w-full bg-gray-200 h-screen grid place-items-center">
  <div>
    <svelte:element this={headingLevel} class="text-4xl mb-5">
      <slot name="title" />
    </svelte:element>
    <p class="text-md text-center">
      <slot name="description" />
    </p>  
  </div>
</section>