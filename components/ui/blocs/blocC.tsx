import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlocC = ({ desc, image }: { desc: string; image: string }) => {
  return (
    <div className="relative mx-3 w-96 my-4 bg-white">
      <div className="absolute top-2 right-2 text-xl flex items-center justify-center bg-white px-2 w-8 h-8 rounded-full ">
        <Heart />
      </div>
      {/* images */}

      <div>
        <Image
          src={image}
          alt=""
          className="h-64 w-96"
          width={1000}
          height={800}
        />
      </div>
      <div className="text-center my-4 mx-6">
        <h1 className="font-semibold hover:decoration-black hover:underline leading-5 ">
          Visite historique d&apos;une journée à Meknès Volubilis et Moulay
          Idriss
        </h1>
      </div>
    </div>
  );
};

export default BlocC;
