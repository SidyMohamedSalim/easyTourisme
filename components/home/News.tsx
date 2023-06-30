import React from "react";
import BlocB from "../ui/blocs/blocB";
import BlocC from "../ui/blocs/blocC";
import { lastTours } from "../../src/db/tours";

const News = async () => {
  const tours = await lastTours();
  return (
    <section className="relative my-28 mx-3">
      <div className="max-w-5xl mx-auto my-4 h-84 bg-covers">
        <div className="">
          {/* desc section */}
          <div>
            <h1 className="font-semibold text-4xl mb-1">
              Nos offres du moment
            </h1>
            <p className="text-md py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* content */}
          <div className="grid  max-md:grid-cols-2 grid-cols-3  gap-4">
            {tours.map((tour) => (
              <BlocB key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
