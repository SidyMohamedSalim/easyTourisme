import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex flex-col justify-between items-center shadow-2xl mt-16 rounded-2xl relative bg-slate-50 p-6 md:w-[46rem]">
          <div className="absolute -top-6">
            <Image src={"/images/user.png"} alt="" width={50} height={50} />
          </div>
          <h1 className="text-2xl py-3">Registrer</h1>

          <div>
            <form action="">
              <div className="">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full md:w-96 py-2 px-3 my-4 rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="password"
                  className="w-full md:w-96 py-2 mr-2 px-3 my-4  rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full md:w-96 pr-5 py-2 px-3  my-4 rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              {/* Avec les reseaux sociaux */}
              <div className="m-4">
                <h1>S&apos;inscrire avec : </h1>
                <div className="flex gap-2 py-4">
                  <Mail className="text-red-500" size={40} />
                  <Facebook className="text text-blue-700" size={40} />
                  <Github size={40} />
                  <Linkedin className="text-blue-400" size={40} />
                </div>
              </div>

              <div className="flex items-end justify-end px-3 py-2 m-4">
                <input
                  type="submit"
                  value={"S'inscrire"}
                  className="bg-orange-400 px-4 py-2 rounded-md text-white hover:bg-orange-500 focus:bg-orange-500"
                />
              </div>
            </form>

            <p className="m-4">
              Deja Un Compte ?{" "}
              <Link href="/auth/login/" className="text-orange-400 italic">
                Se Connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
