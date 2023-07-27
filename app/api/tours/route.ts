import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";

export default apiHandler({
  endpoints: {
    GET: async (req, res) => {
      const tours = await prisma.tour.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      res.send({ tours });
    },
  },
});
