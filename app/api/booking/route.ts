import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const session = await getServerSession(authOptions);

      if (session?.user?.email) {
      } else {
      }
      try {
        const bookings = await prisma.booking.findMany({
          where: {
            UserEmail: user?.email,
          },
        });
        const tours = await prisma.tour.findMany({});

        res.status(200).json({ bookings, tours });
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
});
