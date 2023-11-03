<script lang="ts">
	import { cn } from "$lib/utils";

  let className = ""

	export { className as class };
  export let src = "";
  export let width = 300;
  export let height = 200;
  export let alt = "";
  export let loading: 'eager' | 'lazy' = 'eager';
</script>

{#if src}
  <img {loading} {src} {width} {height} {alt} class={cn(className)} />
{:else}
  <div class={cn("text-gray-900 bg-gray-300", className)}>
    <svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 300 150" fill="#ddd">
      <text fill="rgba(0,0,0,0.5)" font-family="sans-serif" font-size="35" dy="13" font-weight="bold" x="50%" y="50%" text-anchor="middle">{width} × {height}</text>
    </svg>
  </div>
{/if}
