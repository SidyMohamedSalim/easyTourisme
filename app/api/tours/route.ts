import { prisma } from "../../../src/db/prisma";

export async function GET(req: Request) {
  const tours = await prisma.tour.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return new Response(JSON.stringify({ tours }));
}
