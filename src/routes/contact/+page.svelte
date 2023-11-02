<script lang="ts">
	import Title from "$lib/components/utils/title/title.svelte";
  import * as Layout from "$lib/components/layout"
  import ContactForm from "./contact-form.svelte";
  export let data;
</script>

<Layout.Container>
  <Title>Contact</Title>
  <ContactForm form={data.form} />  
</Layout.Container>