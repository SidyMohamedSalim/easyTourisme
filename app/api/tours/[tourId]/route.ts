import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { tourScheme } from "@/src/Scheme/ZodSheme";
import { prisma } from "../../../../src/db/prisma";

const queryScheme = z.object({
  tourId: z.string(),
});

type paramsType = { params: { tourId: string } };

export async function GET(req: Request, { params }: paramsType) {
  const { tourId } = queryScheme.parse(params);
  const tours = await prisma.tour.findUnique({
    where: {
      id: tourId,
    },
  });

  return new Response(JSON.stringify({ tours }));
}

export async function POST(req: Request, { params }: paramsType) {
  const body = tourScheme.parse(req.body);

  try {
    const tour = await prisma.tour.create({
      data: {
        ...body,
      },
    });

    return new Response(
      JSON.stringify({ message: "Destination Ajouté", tour: tour })
    );
  } catch (error: any) {
    if (error.code === "P2002") {
      throw new Error("Destination Deja existant");
    }

    throw new Error(error.message);
  }
}
