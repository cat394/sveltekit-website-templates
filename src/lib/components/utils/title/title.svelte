<script lang="ts">
	import type { HeadingLevel } from '$lib/types.ts';
  
  export let headingLevel: HeadingLevel = "h1";
</script>

<svelte:element
  this={headingLevel}
  class={`font-medium ${
    headingLevel === "h1" 
    ? "text-3xl"
    : headingLevel === "h2"
    ? "text-2xl pl-5 border-l-[2px]"
    : headingLevel === "h3"
    ? "text-xl"
    : ""
  }`}
>
  <slot />
</svelte:element>

