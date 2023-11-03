<script lang="ts">
	import { points } from '$lib/data/points';
  import { stuffList } from "$lib/data/stuffList";
	import {Divider} from "$lib/components/utils/divider";
  import {Title} from "$lib/components/utils/title";
  import * as Layout from "$lib/components/layout";
  import * as Card from "$lib/components/ui/card"
  import {Image} from '$lib/components/utils/image';

  export let data;
</script>
<Layout.Container>
  <Title>About</Title>
  <Divider />
  <Layout.SideBySide>
    <span slot="left">
      <svelte:component this={data.intro} />
    </span>
  </Layout.SideBySide>
  <Divider size="md" />
  <Layout.Grid class="gap-10">
    {#each stuffList as stuff}
      <Card.Root>
        <Card.Header>
          <Image width={100} height={100} src={stuff.image} alt={stuff.name} />
        </Card.Header>
        <Card.Title>{stuff.name}</Card.Title>
        <Card.Description>{stuff.description}</Card.Description>
      </Card.Root>
    {/each}
  </Layout.Grid>
  <Divider size="xl" />
  <Title headingLevel="h2">Layout 3 in 1</Title>
  <Divider />
  <div class="w-[90%] mx-auto">
    <Layout.Grid minItemWidth={500} class="gap-24">
      {#each points as point}
        <Layout.ContentShowcase headingLevel="h3">
          <span slot="title">{point.title}</span>
          <span slot="subTitle">
            {#if point?.subTitle}
              {point.subTitle}
            {/if}
          </span>
          <span slot="image">
            {#if point?.image}
              <Image width={300} height={150} />
            {/if}
          </span>
          <span slot="description">
            {point.description}
          </span>
        </Layout.ContentShowcase>
      {/each}
    </Layout.Grid>
  </div>  
</Layout.Container>
