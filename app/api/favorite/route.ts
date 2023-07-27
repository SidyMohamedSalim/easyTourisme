import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const favorites = await prisma.favoritesTours.findMany({
      where: {
        userEmail: session.user.email,
      },
    });

    return new Response(JSON.stringify(favorites));
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}
