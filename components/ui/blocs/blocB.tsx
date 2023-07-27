import { Tour } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../src/db/prisma";
import Heart from "../../tours/Heart";

export type BlocType = {
  title: string;
  image: string;
  price: number;
  address: string;
  id: string;
  city?: string;
  country?: string;
};

const BlocB = ({ image, city, id }: BlocType) => {
  return (
    <div>
      <Link href={`/tours/${id}/`} className="relative ">
        <div className="absolute top-2 right-2 z-50 text-xl flex items-center justify-center  ">
          <Heart colorDefault="white" />
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
