import { userScheme } from "@/src/Scheme/ZodSheme";
import { prisma } from "../../../src/db/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  const body = userScheme.parse(data);
  const userExists = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (!userExists) {
    const user = await prisma.user.create({ data: body });
    return new Response(
      JSON.stringify({
        message: "Utilisateur créé",
        user: user,
      })
    );
  } else {
    return new Response(
      JSON.stringify({ message: "Utilisateur existant deja" })
    );
  }
}
