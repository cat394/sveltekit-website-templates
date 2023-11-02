<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import type { HeadingLevel } from "$lib/types";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let tag: $$Props["tag"] = "h1";
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn("mt-4", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
