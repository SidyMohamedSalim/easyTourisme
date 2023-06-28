import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import NewsLetters from "./NewsLetters";

const Footer = () => {
  return (
    <div className="pt-28">
      <NewsLetters />
      <div className="bg-slate-600">
        <div className="flex flex-col justify-center mx-auto items-center text-white max-w-5xl max-lg:px-10">
          <h1 className="py-10 text-3xl">Travel.co</h1>
          <div className="pb-4 flex gap-4">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>

          <h3 className="py-6 font-extralight">
            Travel makes one modest. You see what a tiny place you occupy in the
            world.
          </h3>

          <h3 className="py-2 italic">Tout droits reservés</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
