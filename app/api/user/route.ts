import { userScheme } from "@/src/Scheme/ZodSheme";
import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";

export default apiHandler({
  bodyScheme: userScheme,
  endpoints: {
    POST: async (req, res) => {
      const body = userScheme.parse(req.body);

      const userExists = await prisma.user.findUnique({
        where: { email: body.email },
      });

      if (!userExists) {
        const user = await prisma.user.create({ data: body });
        res.send({
          message: "Utilisateur créé",
          user: user,
        });
      } else {
        res.status(201).send({ message: "Utilisateur existant deja" });
      }
    },
  },
});
