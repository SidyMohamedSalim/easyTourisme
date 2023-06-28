import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type blocAProps = {
  title: string;
  image: string;
};
const BlocA = ({ title, image }: blocAProps) => {
  return (
    <div className=" relative  my-4 mr-2 shadow-2xl rounded-sm">
      <div className="opacity-90">
        <Image
          src={image}
          alt=""
          className="w-72 h-64 rounded-sm max-sm:w-full"
          width={600}
          height={600}
        />
        <div className="text-xs flex justify-between text-center items-center px-3 pt-3">
          <div className="flex  gap-1 items-center">
            <MapPin className="text-[0.3rem] text-orange-300" size={22} />
            <h3>Paris</h3>
          </div>
          <div className="flex   gap-1 items-center">
            <Star className="text-orange-300" size={22} />
            <h3>4.2</h3>
          </div>
        </div>
        <div className="p-3">
          <h1 className=" w-full  font-semibold bg text-xl">{title}</h1>
        </div>

        <div className="px-3 pb-2 flex justify-between items-center">
          <h4 className="text-sm">
            <span className="text-orange-400 text-base font-bold">$99 </span>
            /person
          </h4>
          <button className="bg-orange-400 px-2 py-1 text-sm text-white rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlocA;
