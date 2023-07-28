import { LocateFixed, MapPin, Star, User, Users2, Wallet } from "lucide-react";
import Image from "next/image";
import React from "react";
import { findTourbyId } from "../../../src/db/tours";
import FormContact from "./FormContact";
import { Step } from "./Step";
import { prisma } from "../../../src/db/prisma";
import { Reviews } from "./Review";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import Heart from "@/components/tours/Heart";

const page = async ({ params }: { params: { tourId: string } }) => {
  const tour = await findTourbyId(params.tourId);
  const session = await getServerSession(authOptions);

  if (!tour) {
    return (
      <div>
        <h1 className="text-4xl mx-auto">Destination Non Trouvé</h1>
      </div>
    );
  }
  const reviews = await prisma.review.findMany({
    where: {
      tourId: tour.id,
    },
    select: {
      id: true,
      userEmail: true,
      message: true,
      user: true,
      rating: true,
    },
  });
  console.log(reviews);

  return (
    <div className="relative">
      <Image
        width={1000}
        height={500}
        src={tour?.image}
        alt=""
        className="w-full self-center min-h-[35rem] max-h-[40rem]  object-cover "
      />

      <div className="mx-4">
        <div className="max-w-6xl my-10 py-3  max-sm:px-2 mx-auto flex justify-center items-center max-xl:px-10 border-2">
          <div className="grid lg:grid-cols-2 px-2 lg:gap-3">
            {/* left content */}
            <div className="lg:px-5">
              <h1 className="text-lg  font-extrabold mt-2 mb-5">
                Circuit {tour.title}{" "}
              </h1>
              <p className="text-md font-extralight">{tour.description}</p>

              <div>
                <Step title="" activities={[]}></Step>
                <Step title="" activities={[]}></Step>
                <Step title="" activities={[]}></Step>
                <Step title="" activities={[]}></Step>
              </div>
            </div>
            {/* rigth content */}
            <div>
              <Image
                width={1000}
                height={500}
                src={tour?.image}
                alt=""
                className="w-full self-center max-h-[20rem] mb-4 "
              />

              <div>
                <h1 className="font-bold text-xl py-3">
                  Envie de Faire Un tour ?
                </h1>
                <FormContact tourId={tour.id} />
              </div>
            </div>
            <div className="py-3 lg:col-span-2  border my-5 rounded-md w-full p-2 px-8">
              <h1 className="font-bold text-lg">Témoignages</h1>
              <Reviews
                tourId={tour.id}
                Reviews={reviews}
                userSessionEmail={session?.user?.email ?? undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
