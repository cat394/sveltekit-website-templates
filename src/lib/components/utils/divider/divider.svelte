<script lang="ts">
	import { cn } from "$lib/utils";
  import { divideVariants, type Props } from "./";

  type $$Props = Props;

  let className = "";
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "sm";

  export let dashed = false;
  export { className as class };
</script>

<div
  class={cn(divideVariants({ variant, size, className }))}
>
  {#if dashed}
    <div class="w-full h-[1px] border-t border-dashed border-brand-foreground/90"></div>
  {/if}
</div>