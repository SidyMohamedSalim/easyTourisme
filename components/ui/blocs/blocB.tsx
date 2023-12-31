import Image from "next/image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../src/db/prisma";
import Heart from "../../tours/Heart";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { Star } from "lucide-react";

export type BlocType = {
  title: string;
  image: string;
  address: string;
  id: string;
  city?: string;
  country?: string;
};

const BlocB = async ({ image, city, id }: BlocType) => {
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
    <div className="relative ">
      <div className="absolute top-2 right-2 z-50 text-xl flex items-center justify-center  bg-opacity-50 rounded-md px-1">
        <Heart isFav={isFav} tourId={id} />
      </div>
      {/* images */}
      <h1 className="absolute bottom-2 left-2 font-extrabold text-xl flex items-center justify-center text-white px-2  rounded-full ">
        {city}
      </h1>
      <div>
        <Link href={`/tours/${id}/`}>
          <Image
            src={image}
            alt=""
            className="w-full h-72"
            width={600}
            height={600}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlocB;
