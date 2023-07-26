import { Tour } from "@prisma/client";
import { Heart, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../src/db/prisma";

export type BlocType = {
  title: string;
  image: string;
  price: number;
  address: string;
  id: string;
  city?: string;
  country?: string;
};

const BlocB = ({ title, image, price, id }: BlocType) => {
  return (
    <Link href={`/tours/${id}/`} className="relative my-4 hover:opacity-50 ">
      <div className="absolute top-2 right-2 text-xl flex items-center justify-center bg-white px-2 w-8 h-8 rounded-full ">
        <Heart />
      </div>
      {/* images */}

      <div>
        <Image
          src={image}
          alt=""
          className="w-full h-72"
          width={600}
          height={600}
        />
      </div>
      <div>
        <h1 className="font-semibold hover:decoration-black hover:underline leading-5 line-clamp-2">
          {title}
        </h1>
        {/* Notes */}
        <div className="flex">
          {/* avis */}
          <div className="flex justify-evenly gap-1 text-sm">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
          </div>
          {/* Nombre de personnes qui ont noter */}
          <p className="mx-2 font-light">{price}</p>
        </div>
        {/* Prix */}
        <div>
          <p className="font-medium">á partir de {price} MAD par adulte</p>
        </div>
      </div>
    </Link>
  );
};

export default BlocB;
