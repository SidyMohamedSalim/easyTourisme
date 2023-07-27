import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

export const queryScheme = z.object({
  tourId: z.string(),
});

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const session = await getServerSession(authOptions);

      if (session?.user?.email) {
        const { tourId } = queryScheme.parse(req.query);
        const favorite = await prisma.favoritesTours.findMany({
          where: {
            userEmail: session.user?.email,
            TourId: tourId,
          },
        });

        res.send({ favorite });
      } else {
        res.status(201).send({ message: "vous n'etes pas connecte" });
      }
    },
    POST: async (req, res) => {
      const session = await getServerSession(authOptions);

      if (session?.user?.email) {
        try {
          const { tourId } = queryScheme.parse(req.query);
          const isFav = await prisma.favoritesTours.findUnique({
            where: {
              TourId_userEmail: {
                userEmail: session.user?.email,
                TourId: tourId,
              },
            },
          });

          if (isFav) {
            res.status(201).json({ message: "Deja dans fav" });
            return;
          }

          const favorite = await prisma.favoritesTours.create({
            data: {
              TourId: tourId,
              userEmail: session.user.email,
            },
          });

          res.send({ message: "Ajout Reussi", favorite });
        } catch (err: any) {
          throw new Error(err.message);
        }
      } else {
        res.status(201).send({ message: "vous n'etes pas connecte" });
      }
    },
    DELETE: async (req, res) => {
      const session = await getServerSession(authOptions);

      if (session?.user?.email) {
        try {
          const { tourId } = queryScheme.parse(req.query);
          const isFav = await prisma.favoritesTours.findUnique({
            where: {
              TourId_userEmail: {
                userEmail: session.user.email,
                TourId: tourId,
              },
            },
          });

          if (!isFav) {
            res.status(404).json({ message: "Fav non trouvée" });
            return;
          } else {
            await prisma.favoritesTours.delete({
              where: {
                TourId_userEmail: {
                  userEmail: session.user.email,
                  TourId: tourId,
                },
              },
            });

            res.status(200).json({ message: "Fav annulée" });
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
      } else {
        res.status(201).send({ message: "vous n'etes pas connecte" });
      }
    },
  },
});
