<script>
  import { navs } from "./navs";
</script>

<ul class="flex gap-5">
  {#each navs as {name, href}}
    <li><a class="hover:underline" {href}>{name}</a></li>
  {/each}
</ul>