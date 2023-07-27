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

export const BookVisitScheme = z.object({
  date: z.string(),
  email: z.string().email(),
  message: z.string(),
  phone: z.string(),
});
