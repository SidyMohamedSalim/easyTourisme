import News from "@/components/home/News";
import { Search } from "lucide-react";
import React from "react";
import { allTours } from "../../src/db/tours";
import BlocB from "../../components/ui/blocs/blocB";
import BlocA from "../../components/ui/blocs/blocA";
import FormSearch from "../../components/search/formSearch";
import { Tour } from "@prisma/client";

const page = async () => {
  const tours: Tour[] = await allTours();
  return (
    <div>
      <FormSearch />

      <section className="relative my-28 mx-3">
        <div className="max-w-5xl mx-auto my-4 h-84 bg-covers">
          <div className="">
            {/* desc section */}
            <div>
              <h1 className="font-semibold text-4xl mb-1">
                Toutes les destinations
              </h1>
              <p className="text-md py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            {/* content */}
            <div className="grid  max-md:grid-cols-2 grid-cols-3  gap-4">
              {tours.map((tour) => (
                <BlocA key={tour.id} {...tour} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
