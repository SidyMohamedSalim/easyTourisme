import React from "react";
import BlocA from "../ui/blocs/blocA";

const Features = () => {
  return (
    <section className="relative my-28">
      <div className="max-w-5xl mx-auto my-4 h-84 bg-covers">
        <div className="mx-6">
          {/* title section */}
          <div>
            <h1 className="font-semibold text-4xl mb-1">
              Les meilleures activités par catégorie
            </h1>
            <p className="text-md py-3">
              Les Laureats Travellers&apos;Choice Best of the Best
            </p>
          </div>
          {/* content */}
          <div className="grid  sm:grid-cols-2 md:grid-cols-3  gap-4">
            <BlocA title={"Palmarés global"} image={"/images/tour-img02.jpg"} />
            <BlocA title={"Palmarés global"} image={"/images/tour-img03.jpg"} />
            <BlocA title={"Palmarés global"} image={"/images/tour-img01.jpg"} />
            <BlocA title={"Palmarés global"} image={"/images/tour-img05.jpg"} />
            <BlocA title={"Palmarés global"} image={"/images/tour-img04.jpg"} />
            <BlocA title={"Palmarés global"} image={"/images/tour-img07.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
