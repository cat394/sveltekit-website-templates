<script lang="ts">
	import type { HeadingLevel } from '$lib/types';

	export let headingLevel: HeadingLevel = 'h1';
</script>

<div class="max-w-[80ch] mx-auto">
  <div class="grid grid-cols-[1fr_auto]">
    <div>
      <svelte:element this={headingLevel} class="text-xl mb-3">
        <slot name="title" />
      </svelte:element>
      <p class="text-brand-foreground/80">
        <slot name="subTitle" />
      </p>
    </div>
    <div class="place-self-center">
      <slot name="image" />
    </div>
  </div>
  <p class="mt-4"><slot name="description" /></p>
</div>
