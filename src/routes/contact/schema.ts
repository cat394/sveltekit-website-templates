import { z } from "zod";
export const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  content: z.string().min(10).max(100)
});
export type FormSchema = typeof formSchema;