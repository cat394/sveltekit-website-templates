<script lang="ts">
  import * as Card from "$lib/components/ui/card"
  import * as Form from "$lib/components/ui/form";
  import { formSchema, type FormSchema } from "./schema";
  import type { SuperValidated } from "sveltekit-superforms";
  export let form: SuperValidated<FormSchema>;
</script>

<Card.Root class="max-w-[800px] p-10">
  <Form.Root method="POST" {form} schema={formSchema} let:config>
    <Form.Field {config} name="username">
      <Form.Item>
        <Form.Label>Username</Form.Label>
        <Form.Input placeholder="Your name here" />
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Field {config} name="email">
      <Form.Item>
        <Form.Label>Email</Form.Label>
        <Form.Input placeholder="Your email here"/>
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Form.Field {config} name="content">
      <Form.Item>
        <Form.Label>Content</Form.Label>
        <Form.Textarea placeholder="Please describe the content of your inquiry." />
        <Form.Validation />
      </Form.Item>
    </Form.Field>
    <Layout.Position inlinePosition="center">
      <Form.Button>Submit</Form.Button>
    </Layout.Position>
  </Form.Root>
</Card.Root>
