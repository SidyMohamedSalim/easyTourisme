import { Globe, Globe2, LocateFixed, Map, MapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyMe = () => {
  return (
    <section className="relative my-28 py-5 bg-slate-100">
      <div className="max-w-6xl mx-auto my-4 h-84 bg-covers">
        <div className="mx-3">
          {/* title section */}
          <div>
            <h1 className="font-semibold text-4xl mb-1">Nos Experiences</h1>
            <p className="text-md py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, qui.
            </p>
          </div>
          {/* content */}
          <div className="grid grid-cols-4 grid-rows-4  gap-4 md:gap-2">
            <div className=" row-span-2 col-span-4 md:col-span-2 md:row-span-4 ">
              <Image
                src={"/assets/images/Dakar.jpg"}
                alt=""
                width={8000}
                height={9000}
                className="w-full h-full"
              />
            </div>
            <div className=" row-span-1 col-span-2 md:col-span-1 md:row-span-2">
              <Image
                src={"/assets/images/Dakar.jpg"}
                alt=""
                width={8000}
                height={9000}
                className="w-full h-full"
              />
            </div>
            <div className=" row-span-1 col-span-2  flex bg-white justify-center items-center flex-col text-center px-3 md:col-span-1 md:row-span-2">
              <Globe2 className="mb-2 mt-4" size={30} color={"sky"} />
              <h1 className="text-2xl font-medium py-2 italic">
                Un Voyage Passionnant
              </h1>
              <p className="text-sm px-3 py-2 font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                soluta.
              </p>
            </div>
            <div className=" row-span-1 col-span-2 bg-white flex justify-center items-center flex-col text-center px-3 md:col-span-1 md:row-span-2">
              <LocateFixed className="my-2" size={30} color={"sky"} />
              <h1 className="text-2xl font-medium py-2 italic">
                Des lieux Magiques
              </h1>
              <p className="text-sm px-3 py-2 font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                soluta.
              </p>
            </div>
            <div className=" row-span-1 col-span-2 md:col-span-1 md:row-span-2">
              <Image
                src={"/assets/images/Dakar.jpg"}
                alt=""
                width={8000}
                height={9000}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
