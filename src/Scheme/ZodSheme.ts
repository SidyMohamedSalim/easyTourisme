import { z } from "zod";

export const tourScheme = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  image: z.string(),
});

export const userScheme = z.object({
  name: z.string(),
  email: z.string(),
});
