import React from "react";
import BlocB from "../ui/blocs/blocB";
import BlocC from "../ui/blocs/blocC";

const News = () => {
  return (
    <section className="relative my-28">
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
            <BlocB
              desc={"Palmarés global"}
              image={"/tour-images/tour-img08.jpg"}
            />
            <BlocB
              desc={"Palmarés global"}
              image={"/tour-images/tour-img09.jpg"}
            />
            <BlocB desc={"Palmarés global"} image={"/images/gallery-03.jpg"} />
            <BlocB desc={"Palmarés global"} image={"/images/gallery-04.jpg"} />
            <BlocB desc={"Palmarés global"} image={"/images/gallery-02.jpg"} />
            <BlocB desc={"Palmarés global"} image={"/images/gallery-01.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
