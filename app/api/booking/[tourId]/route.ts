import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { BookVisitScheme } from "@/src/Scheme/ZodSheme";
const queryScheme = z.object({
  tourId: z.string(),
});

type paramsType = { params: { tourId: string } };

export async function POST(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  const data = await req.json();

  try {
    const tourId = params.tourId;
    const body = BookVisitScheme.parse(data);

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const bookExist = await prisma.booking.findUnique({
      where: {
        email_TourId: {
          email: session?.user?.email ?? "",
          TourId: tourId,
        },
      },
    });

    if (bookExist) {
      return new Response(
        JSON.stringify({ message: "Destination deja Reservée" }),
        {
          status: 200,
        }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        ...body,
        TourId: tourId,
        email: user.email ?? "",
        UserEmail: body.email,
      },
    });
    return new Response(
      JSON.stringify({ message: "Destination deja Reservée", booking }),
      {
        status: 200,
      }
    );
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function GET(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const { tourId } = queryScheme.parse(params);

    const booking = await prisma.booking.findUnique({
      where: {
        email_TourId: {
          email: session.user.email,
          TourId: tourId,
        },
      },
    });

    return new Response(JSON.stringify(booking));
  } else {
    return new Response(
      JSON.stringify({ message: "Vous devez vous connecté" })
    );
  }
}

export async function DELETE(req: Request, { params }: paramsType) {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const { tourId } = queryScheme.parse(params);

    try {
      const bookExist = await prisma.booking.findUnique({
        where: {
          email_TourId: {
            email: session.user.email,
            TourId: tourId,
          },
        },
      });

      if (!bookExist) {
        return new Response(
          JSON.stringify({ message: "reservation non trouvée" }),
          {
            status: 404,
          }
        );
      } else {
        await prisma.booking.delete({
          where: {
            email_TourId: {
              email: session.user.email,
              TourId: tourId,
            },
          },
        });

        return new Response(
          JSON.stringify({ message: " Reservation annulée" }),
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
