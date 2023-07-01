import { Users2, MapPin, Navigation, Search } from "lucide-react";
import React from "react";

const SearchElement = () => {
  return (
    <div className="grid grid-cols-7 shadow-2xl w-fit rounded-full max-md:hidden px-10 py-4 gap-6  my-10 text-sm justify-center">
      <div className="col-span-2 flex items-center gap-2 border-r border-slate-400 px-1 mx-1">
        <MapPin className="text-orange-500" />
        <div>
          <h1 className="font-bold pb-1 ">Location</h1>
          <div className="border-b b mr-3 text-xs focus:border-none">
            <input
              type="search"
              className="pr-2 focus:outline-none"
              placeholder="Quelle Destination ?"
            />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center gap-2  border-r border-slate-400 px-1 mx-1">
        <Navigation className="text-orange-500" />
        <div>
          <h1 className="font-bold pb-1">Distance</h1>
          <div className="border-b  mr-3 text-xs focus:border-none">
            <input
              type="search"
              className="pr-2  focus:outline-none"
              placeholder="0 km"
            />
          </div>
        </div>
      </div>
      <div className=" col-span-2 flex items-center gap-2 ">
        <Users2 className="text-orange-500" />
        <div>
          <h1 className="font-bold pb-1">Max People</h1>
          <div className="border-b  mr-3 text-xs focus:border-none">
            <input
              type="search"
              className="pr-2  focus:outline-none"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div>
        <button className="font-bold bg-orange-500 w-fit p-2 rounded-sm">
          <Search className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchElement;
