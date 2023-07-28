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
  price: number;
  address: string;
  id: string;
  city?: string;
  country?: string;
};

const BlocB = async ({ image, city, id }: BlocType) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Link href={`/tours/${id}/`} className="relative ">
        <div className="absolute top-2 right-2 z-50 text-xl flex items-center justify-center  bg-black bg-opacity-50 rounded-md px-1">
          <Star color="orange" fill="orange" />
          <h1 className="text-white">2.4</h1>
        </div>
        {/* images */}
        <h1 className="absolute bottom-2 left-2 font-extrabold text-xl flex items-center justify-center text-white px-2  rounded-full ">
          {city}
        </h1>
        <div>
          <Image
            src={image}
            alt=""
            className="w-full h-72"
            width={600}
            height={600}
          />
        </div>
        <div>{/* Prix */}</div>
      </Link>
    </div>
  );
};

export default BlocB;
