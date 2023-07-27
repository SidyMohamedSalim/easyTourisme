import { TypeOf, z } from "zod";
import { tourScheme } from "../ZodSheme";

export type TourType = z.infer<typeof tourScheme>;

export type ToursType = TourType[];
