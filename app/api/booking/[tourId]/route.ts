import { apiHandler } from "@/src/server/api/apiHandler";
import { z } from "zod";
import { prisma } from "../../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { BookVisitScheme } from "@/src/Scheme/ZodSheme";
import { generateEmailContent } from "@/lib/GetContactMessage";
const queryScheme = z.object({
  tourId: z.string(),
});

type paramsType = { params: { tourId: string } };

export async function POST(req: Request, { params }: paramsType) {
  const data = await req.json();

  try {
    const tourId = params.tourId;
    const body = BookVisitScheme.parse(data);

    const tour = await prisma.tour.findUnique({
      where: {
        id: tourId,
      },
    });

    const link = `http://localhost:3000/tours/${tourId}`;

    // await transporter.sendMail({
    //   ...mailOptions(body.email),
    //   ...generateEmailContent({
    //     message: `<p>Vous avez recu une demande de contact concernant  la destination avec le titre :</p>
    //     <a href='${link}' >${tour?.title}</a>`,
    //     ...body,
    //   }),
    //   subject: `Senegal Premium Tour`,
    // });

    await prisma.booking.create({
      data: {
        ...body,
        TourId: tourId,
      },
    });

    return new Response(JSON.stringify({ message: "Destination Reservée" }), {
      status: 200,
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
