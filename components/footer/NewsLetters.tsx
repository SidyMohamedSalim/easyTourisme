import React from "react";

const NewsLetters = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-2xl mx-auto  px-20 pt-20 pb-10 ">
        <div className="pr-4 max-md:col-span-3 text-center">
          <h2 className="font-second text-4xl text-orange-300">
            Abonnez-vous a notre newsletter
          </h2>
          <h2 className="text-sm font-extralight italic">
            Pour ne rater aucune de nos offres. Important : vos informations
            sont en sécurité avec nous.
          </h2>

          <form action="">
            <input
              type="email"
              placeholder="Votre  email"
              className="w-full px-6 py-3 mt-5 rounded-full focus:outline-none "
            />
            <input
              type="submit"
              value={"S'inscrire"}
              className=" bg-orange-400 px-4 py-3 mt-5 rounded-full focus:outline-none text-white font-bold text-sm w-full cursor-pointer hover:bg-orange-500 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
