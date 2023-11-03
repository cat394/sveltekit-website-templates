<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import type { HeadingLevel } from "$lib/types";

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		headingLevel?: HeadingLevel;
	};

	let className: $$Props["class"] = undefined;
	export let headingLevel: $$Props["headingLevel"] = "h1";
	export { className as class };
</script>

<svelte:element
	this={headingLevel}
	class={cn("mt-4 text-center", className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
