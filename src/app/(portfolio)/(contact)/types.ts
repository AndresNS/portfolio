import { z } from "zod";

export const contactFormSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters." }),
  })
  .required();

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
