<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		"shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-4",
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
