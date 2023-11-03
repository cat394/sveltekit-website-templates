<script lang="ts">
	import {Title} from "$lib/components/utils/title";
  import {Divider} from "$lib/components/utils/divider";
  import * as Layout from "$lib/components/layout"
  import ContactForm from "./contact-form.svelte";
  import Map from "./map.svelte";
  import ShopInfos from "./shop-infos.svelte";
  export let data;
</script>

<Layout.Container>
  <Title>Contact</Title>
  <Divider />
  <Title headingLevel="h2">Form</Title>
  <Divider size="ss"/>
  <Layout.SideBySide>
    <span slot="left">
      <p>For inquiries, please use the form below, or contact us directly by email or phone.</p>
    </span>
  </Layout.SideBySide>
  <ContactForm form={data.form} />
  <Divider size="xl" />
  <Title headingLevel="h2">Map & Business hours</Title>
  <Divider size="ss"/>
  <Layout.SideBySide>
    <span slot="left"><Map /></span>
    <span slot="right"><ShopInfos /></span>
  </Layout.SideBySide>
</Layout.Container>