import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { tourScheme } from "@/src/Scheme/ZodSheme";
import { prisma } from "../../../../src/db/prisma";

export const queryScheme = z.object({
  tourId: z.string(),
});

export default apiHandler({
  bodyScheme: tourScheme,
  queryScheme: queryScheme,
  endpoints: {
    GET: async (req, res) => {
      const { tourId } = queryScheme.parse(req.query);
      console.log(tourId);

      try {
        const tour = await prisma.tour.findUnique({
          where: {
            id: tourId,
          },
        });

        res.status(200).json({ tour });
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    POST: async (req, res) => {
      const body = tourScheme.parse(req.body);

      console.log(req.body);
      try {
        const tour = await prisma.tour.create({
          data: {
            ...body,
          },
        });

        res.status(200).send({ message: "Destination Ajouté", tour: tour });
      } catch (error: any) {
        if (error.code === "P2002") {
          throw new Error("Destination Deja existant");
        }

        throw new Error(error.message);
      }
    },
  },
});
