import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlocType } from "./blocB";
import Heart from "../../tours/Heart";
import { prisma } from "../../../src/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";

const BlocA = async ({ title, image, city, id, address }: BlocType) => {
  const session = await getServerSession(authOptions);

  const fav = await prisma.favoritesTours.findUnique({
    where: {
      TourId_userEmail: {
        userEmail: session?.user?.email ?? "",
        TourId: id,
      },
    },
  });

  const isFav = fav ? true : false;

  return (
    <div className=" relative  my-4 mr-2 shadow-2xl rounded-sm">
      <div className="opacity-90">
        <Image
          src={image}
          alt=""
          className=" md:h-64 rounded-sm w-full"
          width={600}
          height={600}
        />
        <div className="text-xs flex justify-between text-center items-center px-3 pt-3">
          <div className="flex  gap-1 items-center">
            <MapPin className="text-[0.3rem] text-sky-300" size={23} />
            <h3 className="text-base">
              {city} - {address}
            </h3>
          </div>
          <div className="absolute z-50 top-2 right-2 gap-1 items-center">
            <Heart isFav={isFav} tourId={id} />
          </div>
        </div>
        <div className="p-3">
          <h1 className=" w-full  font-semibold bg text-base line-clamp-2">
            {title}
          </h1>
        </div>

        <div className="px-3 pb-2 flex justify-between items-center">
          <Link
            href={`/tours/${id}`}
            className="bg-sky-400 hover:bg-sky-600 px-2 py-1 text-sm text-white rounded-md"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlocA;
