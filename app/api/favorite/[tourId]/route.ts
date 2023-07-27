import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";

export const queryScheme = z.object({
  tourId: z.string(),
});

type paramsType = { params: { tourId: string } };

export async function POST(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  try {
    const { tourId } = queryScheme.parse(params);
    const isFav = await prisma.favoritesTours.findUnique({
      where: {
        TourId_userEmail: {
          userEmail: session?.user?.email,
          TourId: tourId,
        },
      },
    });

    if (isFav) {
      return new Response(JSON.stringify({ message: "Deja dans fav" }));
    }

    const favorite = await prisma.favoritesTours.create({
      data: {
        TourId: tourId,
        userEmail: session?.user?.email,
      },
    });

    return new Response(JSON.stringify({ message: "Ajout reussi", favorite }), {
      status: 200,
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function GET(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const { tourId } = queryScheme.parse(params);

    const favorite = await prisma.favoritesTours.findUnique({
      where: {
        TourId_userEmail: {
          userEmail: session.user.email,
          TourId: tourId,
        },
      },
    });
    console.log(favorite);

    return new Response(JSON.stringify(favorite));
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}

export async function DELETE(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    try {
      const { tourId } = queryScheme.parse(params);
      const isFav = await prisma.favoritesTours.findUnique({
        where: {
          TourId_userEmail: {
            userEmail: session.user.email,
            TourId: tourId,
          },
        },
      });

      if (!isFav) {
        return new Response(JSON.stringify({ message: "Favori non trouvée" }), {
          status: 404,
        });
      } else {
        await prisma.favoritesTours.delete({
          where: {
            TourId_userEmail: {
              userEmail: session.user.email,
              TourId: tourId,
            },
          },
        });

        return new Response(JSON.stringify({ message: " Favorie annulée" }), {
          status: 200,
        });
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
