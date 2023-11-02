<script lang="ts">
	import { cn } from "$lib/utils";

  export let containerClass = "";
  export let rightClass = "";
  export let leftClass = "";
</script>

<div class={cn("grid md:grid-cols-[1fr_1fr] justify-center row-gap-4 column-gap-7 mb-10", containerClass)}>
  <div class={leftClass}>
    <slot name="left" />
  </div>
  <div class={rightClass}>
    <slot name="right" />
  </div>
</div>