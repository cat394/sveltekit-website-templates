<script lang="ts">
  import { cn } from "$lib/utils";

  let className = "";
  export { className as class };
  export let minItemWidth = 250;
</script>

<div
  class={cn("grid justify-items-center", className)}
  style={`grid-template-columns: repeat(auto-fit, minmax(min(${minItemWidth}px, 100%), 1fr));`}
>
  <slot />
</div>