import { Tour } from "@prisma/client";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlocA = ({ title, image, city, rating, price, id }: Tour) => {
  return (
    <div className=" relative  my-4 mr-2 shadow-2xl rounded-sm">
      <div className="opacity-90">
        <Image
          src={image}
          alt=""
          className="md:w-72 md:h-64 rounded-sm max-sm:w-full"
          width={600}
          height={600}
        />
        <div className="text-xs flex justify-between text-center items-center px-3 pt-3">
          <div className="flex  gap-1 items-center">
            <MapPin className="text-[0.3rem] text-orange-300" size={22} />
            <h3>{city}</h3>
          </div>
          <div className="flex   gap-1 items-center">
            <Star className="text-orange-300" size={22} />
            <h3>{rating}</h3>
          </div>
        </div>
        <div className="p-3">
          <h1 className=" w-full  font-semibold bg text-xl line-clamp-2">
            {title}
          </h1>
        </div>

        <div className="px-3 pb-2 flex justify-between items-center">
          <h4 className="text-sm">
            <span className="text-orange-400 text-base font-bold">
              ${price}{" "}
            </span>
            /person
          </h4>
          <Link
            href={`/tours/${id}`}
            className="bg-orange-400 px-2 py-1 text-sm text-white rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlocA;
