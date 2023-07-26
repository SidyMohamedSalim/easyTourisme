"use client";
import { Button, Input } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Welcome = () => {
  return (
    // <div>
    //   <div className="max-md:w-full max-w-6xl mx-auto mb-28">
    //     <div className=" mx-auto flex max-md:flex-col max-md:px-0 justify-between items-center max-xl:px-4 pt-24">
    //       {/* left */}
    //       <div className="w-[48%] pr-6 max-md:px-6 max-md:w-full max-md:text-center">
    //         <div className="bg-orange-200 w-fit px-4 py-2 rounded-full font-[cursive]">
    //           Melleure Opportunite
    //         </div>
    //         <h1 className="font-semibold text-4xl py-6 space-x-4 leading-10">
    //           Traveling opens the door to creating{" "}
    //           <span className="text-orange-400">memories</span>
    //         </h1>
    //         <p className="text-sm font-light leading-7">
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //           Provident ducimus voluptatem dicta laborum ratione aspernatur
    //           voluptas corporis natus asperiores veritatis eius vero, et soluta
    //           porro sunt autem inventore libero delectus.
    //         </p>
    //       </div>

    //       {/* right */}
    //       <div className="w-[55%] flex max-md:px-4 max-md:w-full max-md:mt-10">
    //         <div className="mr-4">
    //           <Image
    //             className="w-96  h-60 mr-5 border-2 border-black rounded-3xl"
    //             width={300}
    //             height={700}
    //             alt=""
    //             src={"/images/hero-img01.jpg"}
    //           />
    //         </div>
    //         <div className="mt-10 mr-4">
    //           <Image
    //             className="w-96 h-60  border-black   border-2 rounded-3xl"
    //             width={300}
    //             height={700}
    //             alt=""
    //             src={"/images/gallery-01.jpg"}
    //           />
    //         </div>
    //         <div className="mt-20">
    //           <Image
    //             className="w-96 h-60 border-2 border-black s rounded-3xl"
    //             width={300}
    //             height={700}
    //             alt=""
    //             src={"/images/hero-img02.jpg"}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* search */}
    //   <FormSearch />
    // </div>

    <div className="w-full h-screen relative">
      <Image
        className="w-full h-full object-cover"
        src={"/assets/images/dakar2.jpg"}
        alt="bg illustration dakar"
        width={800}
        height={800}
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-2xl text-center text-white p-4">
        <h1 className="text-5xl">
          Découvrez les meilleurs
          <br /> endroit à visiter au Sénégal
        </h1>
        <h2 className="py-4">Top 1% des meilleures destinations</h2>
        <form
          className="flex  justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent outline-none border-none hover:outline-none focus:border-transparent  font-[Poppins] focus:outline-none
                  "
              type="text"
              placeholder="Trouvez Une destination"
            />
          </div>
          <div>
            <Button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffff" }}
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
