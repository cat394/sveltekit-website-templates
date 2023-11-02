<script lang="ts">
  import * as config from "$lib/config"
	import {Hero} from "$lib/components/ui/hero";
	import {Divider} from "$lib/components/utils/divider";
	import {Image} from "$lib/components/utils/image";
	import {Title} from "$lib/components/utils/title";
  import {Button} from "$lib/components/ui/button"
	import * as Layout from "$lib/components/layout";
</script>

<Hero>
  <span slot="title">{config.name}</span>
  <span slot="description">This is template site.</span>
</Hero>
<Divider size="md" />
<Layout.Container>
  <Title headingLevel="h2">Layout-1</Title>
  <Divider />
  <Layout.Grid>
    <Image />
    <Image />
    <Image />
  </Layout.Grid>
  <Divider />
  <Layout.Position inlinePosition="center">
    <Button>To About</Button>
  </Layout.Position>
  <Divider size="2xl"/>
  <Title headingLevel="h2">Layout-2</Title>
  <Divider />
  {#each {length: 3} as _, i}
    <Layout.SideBySide leftClass="place-self-center">
      <span slot="left">
        <Image />
      </span>
      <span slot="right">
        <b class="block text-center mb-3">Caption{i+1}</b>
        <p class="leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tincidunt quam. Nulla vitae lectus sed orci vehicula blandit. Vestibulum accumsan magna a arcu hendrerit venenatis. Vivamus quis lectus fringilla.</p>
      </span>
    </Layout.SideBySide>
  {/each}
</Layout.Container>
