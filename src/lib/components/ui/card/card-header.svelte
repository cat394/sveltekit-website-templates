<script lang="ts">
	import { Position } from "$lib/components/layout";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class={cn(className)} {...$$restProps}>
	<Position inlinePosition="center">
		<div class="rounded-full overflow-hidden">
			<slot />
		</div>
	</Position>
</div>
