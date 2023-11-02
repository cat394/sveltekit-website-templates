<script lang="ts">
  import { cn } from "$lib/utils";
  export let inlinePosition: "left" | "center" | "right" = "left";

  let positionStyle: 'justify-self-left' | 'justify-self-center' | 'justify-self-end' = 'justify-self-left';

  switch (inlinePosition) {
    case "left":
      positionStyle = 'justify-self-left'
      break;

    case "center":
      positionStyle = 'justify-self-center'
      break;

    case "right":
      positionStyle = 'justify-self-end'
      break;
  }

  let className = '';
  export { className as class };
</script>

<div class={cn('grid', className)}>
  <div class={positionStyle}>
    <slot />
  </div>
</div>