<script lang="ts">
  import {Image} from "$lib/components/utils/image";
  import * as Nav from "$lib/components/ui/nav";
  
  export let url = "";
</script>


<header
  class={`bg-gray-300/30 backdrop-blur-sm w-full px-10 py-4 flex justify-between items-center ${url === "/" ? "fixed" : "mb-10"}`}
> 
  <a href="/" class="rounded-full overflow-hidden">
    <Image width={50} height={50} />
  </a>
  <Nav.Wide />
</header>