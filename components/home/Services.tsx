import { Cloud } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-slate-100 my-28">
      <div className="max-w-5xl mx-auto grid grid-cols-4 max-md:grid-cols-3 gap-4 px-3 pt-20 pb-10 ">
        <div className="pr-4 max-md:col-span-3 text-center">
          <h2 className="font-second text-xl text-orange-300">
            What We serve ?
          </h2>
          <h2 className="text-3xl font-semibold italic">
            We offer our best services
          </h2>
        </div>
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;

export const Service = () => {
  return (
    <div className="sha shadow-sm shadow-orange-400 p-3 bg-slate-50">
      <div className="text-white bg-orange-400 w-fit p-1 rounded-full">
        <Cloud className="text-sm" />
      </div>
      <h1 className="text-base font-semibold py-2">Calculate Weather</h1>
      <p className="text-sm font-extralight">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
      </p>
    </div>
  );
};
