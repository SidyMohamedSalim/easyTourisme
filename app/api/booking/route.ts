import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const bookings = await prisma.booking.findMany({
      where: {
        email: session.user.email,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new Response(JSON.stringify(bookings));
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}
