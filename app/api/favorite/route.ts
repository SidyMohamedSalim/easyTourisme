import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const session = await getServerSession(authOptions);

      if (session?.user?.email) {
        try {
          const favorites = await prisma.favoritesTours.findMany({
            where: {
              userEmail: session.user?.email,
            },
          });

          res.status(200).json({ favorites });
        } catch (error: any) {
          throw new Error(error.message);
        }
      } else {
      }
    },
  },
});
