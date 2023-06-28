import {
  Locate,
  LocateFixed,
  LucideLocate,
  Map,
  MapPin,
  Star,
  Stars,
  Users2,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto py-24 max-sm:px-2 max-xl:px-10">
        <div className="grid lg:grid-cols-5 gap-2">
          <div className="lg:col-span-3 m-4">
            <Image
              width={1000}
              height={500}
              src="/images/gallery-01.jpg"
              alt=""
              className="w-full h-[50%] rounded-md"
            />

            {/* details */}
            <div className="my-6">
              <div className="rounded-sm p-6 border">
                <h1 className="py-3 font-medium text-2xl">
                  Snowy Mountains Thailand
                </h1>
                <div className="grid grid-cols-3  gap-2 text-xs items-center">
                  <div className="flex gap-1 items-center">
                    <Star size={15} color="orange" fill="orange" />
                    <h3>No rated</h3>
                  </div>
                  <div className="flex gap-1 items-center col-span-2">
                    <LocateFixed size={15} />
                    <h3>SomeWhere in Guinea</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <MapPin size={15} />
                    <h3>Bangkok</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Wallet size={15} />
                    <h3>$99/per person</h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Users2 size={15} />
                    <h3>
                      <span>8</span> People(s)
                    </h3>
                  </div>
                </div>
                <div className="py-6">
                  <h1 className="text-lg">Description</h1>
                  <p className="text-sm font-extralight my-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rerum dolor quae pariatur provident, aperiam magni quasi
                    libero quibusdam assumenda? Sit eum temporibus similique
                    architecto sunt dolorem natus reprehenderit error
                    voluptatem?
                  </p>
                </div>
              </div>
            </div>

            {/* avis */}
            <div className="my-6">
              <div className="rounded-sm p-6 border">
                <h1>Reviews (0 reviews)</h1>
                {/* deferrents reviews */}
                <div>{/* todo */}</div>

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
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border m-4 rounded-md">
            <div className="flex justify-between m-6 pb-6 border-b">
              <h1 className="text-sm">
                <span className="text-2xl font-semibold">$99</span> /person
              </h1>
              <div className="flex items-center">
                <Star fill="orange" color="orange" size={15} /> <span>(0)</span>
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
                    type="text"
                    name="guest"
                    placeholder="Guest"
                    id=""
                    className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
                  />
                </div>
              </form>

              <div className="p-6">
                <div className="text-sm flex justify-between py-3">
                  <h1>$99 x 1 person</h1>
                  <p>$99</p>
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
                  Book Now
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
