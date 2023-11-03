<script lang="ts">
  import {location, businessHours, phoneNumber} from "$lib/data/shopInfos";
  import * as Table from "$lib/components/ui/table";
</script>

<ul>
  <li>
    <b>Business hours</b>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Day</Table.Head>
          <Table.Head>Time</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
          {#each Object.entries(businessHours) as [day, hours]}
          <Table.Row>
            <Table.Cell class="font-medium">{day}</Table.Cell>
            <Table.Cell class="font-medium">{hours[0]} - {hours[1]}</Table.Cell>
          </Table.Row>
          {/each}
      </Table.Body>
    </Table.Root>
  </li>
  <li class="mt-6">
    <b>Loacation</b>
    <address>
      <p>{location.zipcode}</p>
      <p>{location.prefecture} - {location.city} - {location.address}</p>
    </address>
  </li>
  <li class="mt-6">
    <b>Phone</b>
    <a href={`tel:${phoneNumber}`}>calling us</a>
  </li>
</ul>