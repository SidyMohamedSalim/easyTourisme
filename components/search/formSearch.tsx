import { Minus, Plus } from "lucide-react";
import React from "react";

const FormSearch = () => {
  return (
    <div className="bg-[url('/assets/images/hero-image.png')] bg-cover h-[40rem] my-20">
      <div className="w-full h-full flex bg-black bg-opacity-50">
        <form className="max-w-5xl mx-auto flex flex-col items-center justify-center w-fit ">
          <h1 className=" text-white py-2 px-2 italic text-4xl font-light text-center  leading-[3rem]">
            Planifier votre voyage avec le meilleur conseiller Touristique
          </h1>

          <h3 className="text-orange-400  font-extrabold text-xl pb-6">
            Votre Voyage Notre Passion
          </h3>
          <div className="py-3 w-[80%]">
            <input
              type="text"
              placeholder="Destination"
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="py-3 w-[80%]">
            <input
              type="date"
              placeholder="Date de depart"
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="py-3 w-[80%]">
            <input
              type="date"
              placeholder="Date de retour"
              className=" p-2 rounded-md w-full"
            />
          </div>

          <div className="bg-white flex w-[80%] items-center justify-between my-3 px-2 rounded-md ">
            <h1>Personne</h1>
            <div className="flex justify-between items-center w-[78%] ">
              <div className="bg-slate-300 text-center rounded-full p-2">
                <span>
                  <Minus size={8} className="font-extrabold" />
                </span>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="0"
                  className="w-12 pl-3 focus:outline-non border-none"
                  min={1}
                  max={9}
                />
              </div>
              <div className="bg-slate-300 text-center rounded-full p-2">
                <span>
                  <Plus size={8} className="font-extrabold" />
                </span>
              </div>
            </div>
          </div>

          <div className="py-3 w-[80%]">
            <input
              type={"submit"}
              className="bg-orange-400 hover:bg-orange-500 px-1 py-2  text-center text-white rounded-lg p-2 w-full text-lg"
              value={"Rechercher"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSearch;
