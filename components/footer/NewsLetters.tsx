import React from "react";
import TextField from "../ui/form/TextField";
import ButtonNew from "../ui/button";

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

          <form action="" className="mt-4 mb-8">
            <TextField
              id="email"
              name="email"
              type="email"
              color="solid"
              placeholder="hello@me.com"
              autoComplete="email"
              required
              className={""}
            />

            <ButtonNew
              type="submit"
              variant="outline"
              color=""
              className="mt-3 w-full bg-orange-400"
              href={""}
            >
              Enregistrer
            </ButtonNew>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetters;
