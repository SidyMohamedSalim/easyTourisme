import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex flex-col justify-between items-center shadow-2xl mt-16 rounded-2xl relative bg-slate-50 p-6 md:w-[46rem]">
          <div className="absolute -top-6">
            <Image src={"/images/user.png"} alt="" width={50} height={50} />
          </div>
          <h1 className="text-2xl py-3">Login</h1>

          <div>
            <form action="">
              <div className="">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full md:w-96 py-2 px-3 my-4  rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="password"
                  className="w-full md:w-96 py-2 px-3 my-4 rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              <h2 className="border-b w-fit border-orange-400 text-orange-400 m-4 hover:text-orange-500 cursor-pointer">
                Mot de passe oublié ?
              </h2>
              <div className="flex items-end justify-end px-3 py-2 m-4">
                <input
                  type="submit"
                  value={"Se connecter"}
                  className="bg-orange-400 px-4 py-2 rounded-md text-white hover:bg-orange-500 focus:bg-orange-500"
                />
              </div>
            </form>
            {/* Avec les reseaux sociaux */}
            <div className="m-4">
              <h1>Se connecter avec : </h1>
              <div className="flex gap-2 py-4">
                <Mail className="text-red-500" size={40} />
                <Facebook className="text text-blue-700" size={40} />
                <Github size={40} />
                <Linkedin className="text-blue-400" size={40} />
              </div>
            </div>

            <p className="m-4">
              Pas encore de Compte ?{" "}
              <Link href="/auth/register/" className="text-orange-400 italic">
                S&apos;incrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
