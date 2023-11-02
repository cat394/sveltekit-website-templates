<script>
  import { cn } from "$lib/utils";

  let className = '';
  export { className as class };
</script>

<div class={cn('w-[90%] mx-auto', className)}>
  <slot />
</div>