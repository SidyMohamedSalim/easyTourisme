import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import booking from "../route";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

export const queryScheme = z.object({
  tourId: z.string(),
});

const bodyScheme = z.object({
  date: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const session = await getServerSession(authOptions);
      if (session?.user?.email) {
        const { tourId } = queryScheme.parse(req.query);

        const booking = await prisma.booking.findMany({
          where: {
            email: session?.user?.email,
            TourId: tourId,
          },
        });

        res.send({ booking });
      } else {
        res.status(201).json({ message: "Vous devez vous connecté" });
      }
    },
    POST: async (req, res) => {
      const session = await getServerSession(authOptions);
      if (session?.user?.email) {
        try {
          const { tourId } = queryScheme.parse(req.query);
          const body = bodyScheme.parse(req.body);
          const user = await prisma.user.findFirst();

          const bookExist = await prisma.booking.findUnique({
            where: {
              email_TourId: {
                email: session.user.email,
                TourId: tourId,
              },
            },
          });

          if (bookExist) {
            res.status(201).json({ message: "Destination déja reservée" });
            return;
          }

          const booking = await prisma.booking.create({
            data: {
              ...body,
              TourId: tourId,
              UserEmail: user?.email,
            },
          });

          res.send({ message: "Reservation Reussi", booking });
        } catch (err: any) {
          throw new Error(err.message);
        }
      } else {
        res.status(201).json({ message: "Vous devez vous connecté" });
      }
    },
    DELETE: async (req, res) => {
      const session = await getServerSession(authOptions);
      if (session?.user?.email) {
        const { tourId } = queryScheme.parse(req.query);
        const body = bodyScheme.parse(req.body);

        try {
          const bookExist = await prisma.booking.findUnique({
            where: {
              email_TourId: {
                email: body.email ?? session?.user.email,
                TourId: tourId,
              },
            },
          });

          if (!bookExist) {
            res.status(404).json({ message: "reservation non trouvée" });
            return;
          } else {
            await prisma.booking.delete({
              where: {
                email_TourId: {
                  email: session.user.email,
                  TourId: tourId,
                },
              },
            });

            res.status(200).json({ message: "Reservation annulée" });
          }
        } catch (err: any) {
          throw new Error(err.message);
        }
      } else {
        res.status(201).json({ message: "Vous devez vous connecté" });
      }
    },
  },
});
