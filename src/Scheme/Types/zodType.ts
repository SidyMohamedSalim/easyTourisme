import { TypeOf, z } from "zod";
import { tourScheme, BookVisitScheme } from "../ZodSheme";

export type TourType = z.infer<typeof tourScheme>;

export type ToursType = TourType[];

export type bookVsitType = z.infer<typeof BookVisitScheme>;
