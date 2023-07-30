import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
const queryScheme = z.object({
  tourId: z.string(),
});
const bodyScheme = z.object({
  email: z.string(),
  id: z.string(),
});

const bodyPostScheme = z.object({
  message: z.string(),
  rating: z.number(),
});

const bodyDeleteScheme = z.object({
  ReviewId: z.string(),
});

type paramsType = { params: { tourId: string } };

export async function POST(req: Request, { params }: paramsType) {
  const data = await req.json();
  const sesssion = await getServerSession(authOptions);

  try {
    const { tourId } = params;
    const body = bodyPostScheme.parse(data);
    if (sesssion?.user?.email) {
      const user = await prisma.user.findFirst({
        where: {
          email: sesssion.user.email,
        },
      });

      if (!user) {
        return new Response(
          JSON.stringify({ message: "vous devez vous connecté" })
        );
      }
      const review = await prisma.review.create({
        data: {
          message: body.message,
          rating: body.rating,
          tourId: tourId,
          userEmail: user?.email,
        },
      });
      return new Response(JSON.stringify({ review }), {
        status: 200,
      });
    }

    return new Response(
      JSON.stringify({ message: "vous devez vous connecté" })
    );
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function GET(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const { tourId } = queryScheme.parse(params);

    const review = await prisma.review.findMany({
      where: {
        id: tourId,
        userEmail: session.user.email,
      },
    });

    return new Response(JSON.stringify(review));
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}

export async function DELETE(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  const data = req.json();
  const body = bodyDeleteScheme.parse(data);
  if (session?.user?.email) {
    const { tourId } = queryScheme.parse(params);

    try {
      const review = await prisma.review.findUnique({
        where: {
          id: body.ReviewId,
        },
      });

      if (!review) {
        return new Response(
          JSON.stringify({ message: "commentaire non trouvée" }),
          {
            status: 404,
          }
        );
      } else {
        await prisma.review.delete({
          where: {
            id: body.ReviewId,
          },
        });

        return new Response(
          JSON.stringify({ message: " commentaire supprimé" }),
          {
            status: 200,
          }
        );
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}
