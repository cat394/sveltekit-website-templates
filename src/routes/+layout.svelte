<script>
  import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
  import "../app.postcss";

  export let data;
</script>

<div class="grid grid-[auto_1fr_auto]">
  <Header url={data.url} />
  <main>
    <slot />
  </main>
  <Footer />
</div>