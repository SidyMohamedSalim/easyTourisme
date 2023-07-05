import { getSession } from "@/lib/nextAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginWithSocial from "./LoginWithSocial";

const page = async () => {
  const session = await getSession();
  return (
    <div>
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex flex-col justify-between items-center shadow-2xl mt-16 rounded-2xl relative bg-slate-50 p-6 md:w-[46rem]">
          <div className="absolute -top-6">
            <Image src={"/images/user.png"} alt="" width={50} height={50} />
          </div>
          <h1 className="text-2xl py-3">Login</h1>
          {/* Avec les reseaux sociaux */}

          {session?.user ? (
            <h1>Bienvenue {session.user.name}</h1>
          ) : (
            <LoginWithSocial />
          )}
          {/* or */}
          <div className="flex justify-between items-center gap-2">
            <div className="bg-slate-400 w-36 h-1"></div>
            <h1 className="py-4">Or</h1>
            <div className="bg-slate-400 w-36 h-1"></div>
          </div>

          <div className="w-full px-4 mx-auto flex flex-col justify-center items-center">
            <form
              action=""
              className="py-4 w-full  md:flex flex-col mx-auto md:px-10"
            >
              <div className="mx-auto">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full md:w-[30rem] py-2 px-3 my-4  rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
                />
              </div>
              <div className="mx-auto">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full md:w-[30rem] py-2 px-3 my-4 rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
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
