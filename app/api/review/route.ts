import { apiHandler } from "@/src/server/api/apiHandler";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { string, z } from "zod";

const bodyRequestScheme = z.object({
  tourId: z.string(),
});
export async function GET(req: Request) {
  const data = await req.json();
  const body = bodyRequestScheme.parse(data);

  const reviews = await prisma.review.findMany({
    where: {
      tourId: body.tourId,
    },
  });

  return new Response(JSON.stringify(reviews));
}
