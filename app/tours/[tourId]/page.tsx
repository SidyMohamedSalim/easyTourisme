import { LocateFixed, MapPin, Star, User, Users2, Wallet } from "lucide-react";
import Image from "next/image";
import React from "react";
import { findTourbyId } from "../../../src/db/tours";

const page = async ({ params }: { params: { tourId: string } }) => {
  const tour = await findTourbyId(params.tourId);

  if (!tour) {
    return (
      <div>
        <h1 className="text-4xl mx-auto">NoT Found</h1>
      </div>
    );
  }
  const reviews = await prisma?.review.findMany({
    where: {
      tourId: tour?.id,
    },
  });

  return (
    <div>
      <div className="max-w-5xl mx-auto py-24 max-sm:px-2 max-xl:px-10">
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
                    <Star size={15} color="orange" fill="orange" />
                    <h3>{tour.rating}</h3>
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
                      <span>{tour.maxGroupSize}</span> People(s)
                    </h3>
                  </div>
                </div>
                <div className="py-6">
                  <h1 className="text-lg">Description</h1>
                  <p className="text-sm font-extralight my-3">{tour.title}</p>
                </div>
              </div>
            </div>

            {/* avis */}
            <div className="my-6">
              <div className="rounded-sm p-6 border">
                <h1>Reviews ({reviews?.length ?? 0} reviews)</h1>

                <div className="text-xs grid grid-cols-5 gap-2 text-orange-200  w-fit py-4">
                  <h1 className="flex justify-center items-center">
                    <span>1</span>
                    <Star size={15} fill="orange" color="orange" />
                  </h1>
                  <h1 className="flex justify-center items-center">
                    <span>2</span>
                    <Star size={15} fill="orange" color="orange" />
                  </h1>
                  <h1 className="flex justify-center items-center">
                    <span>3</span>
                    <Star size={15} fill="orange" color="orange" />
                  </h1>
                  <h1 className="flex justify-center items-center">
                    <span>4</span>
                    <Star size={15} fill="orange" color="orange" />
                  </h1>
                  <h1 className="flex justify-center items-center">
                    <span>5</span>
                    <Star size={15} fill="orange" color="orange" />
                  </h1>
                </div>

                <div>
                  <form
                    action=""
                    className="w-full  grid grid-cols-6 rounded-full border border-orange-400 py-2 px-4"
                  >
                    <input
                      type="text"
                      className="border-b col-span-5 m-1 text-xs focus:outline-none hover:outline-none"
                      placeholder="write your thoughts"
                    />
                    <input
                      type="sumbit"
                      className="bg-orange-400 hover:bg-orange-500 px-1 py-1 mx-2 text-xs text-center text-white rounded-lg"
                      placeholder="write your thoughts"
                      value={"Submit"}
                    />
                  </form>
                </div>
                {/* deferrents reviews */}
                <div className="md:overflow-scroll md:max-h-64 mt-6 max-md:mb-[2rem]">
                  {/* avis */}
                  {reviews?.map((review, index) => (
                    <div className="py-3" key={index}>
                      <div className="flex justify-between pt-6 px-3 items-center">
                        <div className="flex ">
                          <User
                            className="mr-6 font-bold justify-start items-start"
                            size={30}
                          />
                          <div>
                            <h1 className="font-extrabold">
                              {review.username}
                            </h1>
                            <h3 className="text-sm font-extralight italic">
                              {review.updatedAt.toDateString()}
                            </h3>
                          </div>
                        </div>

                        <div>
                          <h1 className="flex justify-center items-center">
                            <span>{review.rating}</span>
                            <Star size={15} fill="orange" color="orange" />
                          </h1>
                        </div>
                      </div>
                      <p className="px-12 font-light text-sm">{review.text}</p>
                    </div>
                  ))}

                  {/* fin avis */}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border m-4 rounded-md h-fit">
            <div className="flex justify-between m-6 pb-6 border-b">
              <h1 className="text-sm">
                <span className="text-2xl font-semibold">${tour.price}</span>{" "}
                /person
              </h1>
              <div className="flex items-center">
                <Star fill="orange" color="orange" size={15} />{" "}
                <span>({tour.rating})</span>
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

                <button className="w-full bg-orange-400  py-1 text-sm rounded-3xl mt-4 text-white hover:bg-orange-500">
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
