import { LocateFixed, MapPin, Star, User, Users2, Wallet } from "lucide-react";
import Image from "next/image";
import React from "react";
import { findTourbyId } from "../../../src/db/tours";

const page = async ({ params }: { params: { tourId: string } }) => {
  const tour = await findTourbyId(params.tourId);

  if (!tour) {
    return (
      <div>
        <h1 className="text-4xl mx-auto">Destination Non Trouvé</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto py-24 max-sm:px-2 max-xl:px-10">
        <div className="grid lg:grid-cols-5 gap-2">
          <div className="lg:col-span-3 m-4">
            <Image
              width={1000}
              height={500}
              src={tour?.image}
              alt=""
              className="w-full h-[40%] max-md:h-96 rounded-md"
            />

            {/* details */}
            <div className="my-6">
              <div className="rounded-sm p-6 border">
                <h1 className="py-3 font-medium text-2xl">{tour.city}</h1>
                <div className="grid grid-cols-3  gap-2 text-xs items-center">
                  <div className="flex gap-1 items-center">
                    <Star size={15} color="sky" fill="sky" />
                    <h3>{tour.price}</h3>
                  </div>
                  <div className="flex gap-1 items-center col-span-2">
                    <LocateFixed size={15} />
                    <h3>SomeWhere in Guinea</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MapPin size={15} />
                    <h3>{tour.city}</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Wallet size={15} />
                    <h3>${tour.price}/per person</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Users2 size={15} />
                    <h3>
                      <span>200</span> People(s)
                    </h3>
                  </div>
                </div>
                <div className="py-6">
                  <h1 className="text-lg">Description</h1>
                  <p className="text-sm font-extralight my-3">{tour.title}</p>
                </div>
              </div>
            </div>

            {/* avis  a faire ici*/}
          </div>

          <div className="lg:col-span-2 border m-4 rounded-md h-fit">
            <div className="flex justify-between m-6 pb-6 border-b">
              <h1 className="text-sm">
                <span className="text-2xl font-semibold">${tour.price}</span>{" "}
                /person
              </h1>
              <div className="flex items-center">
                <Star fill="sky" color="sky" size={15} />{" "}
                <span>({tour.price})</span>
              </div>
            </div>

            <div className="px-6">
              <h1 className="font-medium text-lg">Information</h1>

              <form action="" className="border rounded-sm p-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  id=""
                  className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
                />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  id=""
                  className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    placeholder="Phone"
                    id=""
                    className="border-b text-sm w-full focus:outline-none hover:outline-none my-3"
                  />
                  <input
                    type="number"
                    name="guest"
                    min="1"
                    placeholder="Nbre de Personnes"
                    id=""
                    className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
                  />
                </div>
              </form>

              <div className="p-6">
                <div className="text-sm flex justify-between py-3">
                  <h1>${tour.price} x 1 person</h1>
                  <p>${tour.price}</p>
                </div>
                <div className="text-sm flex justify-between py-3">
                  <h1>Service de charge</h1>
                  <p>$10</p>
                </div>
                <div className="text-sm flex justify-between py-3 font-bold">
                  <h1>Total</h1>
                  <p>$109</p>
                </div>

                <button className="w-full bg-sky-400  py-1 text-sm rounded-3xl mt-4 text-white hover:bg-sky-500">
                  Reserver Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
