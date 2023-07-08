import { getSession } from "@/lib/nextAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextField from "../../../components/ui/form/TextField";
import ButtonNew from "../../../components/ui/button";
import LoginWithSocial from "@/components/ui/auth/LoginButtonSocail";
import { Github, Facebook } from "lucide-react";

const page = async () => {
  const session = await getSession();
  return (
    // <div>
    //   <div className="max-w-5xl mx-auto flex justify-center">
    //     <div className="flex flex-col justify-between items-center shadow-2xl mt-16 rounded-2xl relative bg-slate-50 p-6 md:w-[46rem]">
    //       <div className="absolute -top-6">
    //         <Image src={"/images/user.png"} alt="" width={50} height={50} />
    //       </div>
    //       <h1 className="text-2xl py-3">Login</h1>
    //       {/* Avec les reseaux sociaux */}

    //       {session?.user ? (
    //         <h1>Bienvenue {session.user.name}</h1>
    //       ) : (
    //         <LoginWithSocial />
    //       )}
    //       {/* or */}
    //       <div className="flex justify-between items-center gap-2">
    //         <div className="bg-slate-400 w-36 h-1"></div>
    //         <h1 className="py-4">Or</h1>
    //         <div className="bg-slate-400 w-36 h-1"></div>
    //       </div>

    //       <div className="w-full px-4 mx-auto flex flex-col justify-center items-center">
    //         <form
    //           action=""
    //           className="py-4 w-full  md:flex flex-col mx-auto md:px-10"
    //         >
    //           <div className="mx-auto">
    //             <input
    //               type="email"
    //               placeholder="Your Email"
    //               className="w-full md:w-[30rem] py-2 px-3 my-4  rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
    //             />
    //           </div>
    //           <div className="mx-auto">
    //             <input
    //               type="password"
    //               placeholder="password"
    //               className="w-full md:w-[30rem] py-2 px-3 my-4 rounded-md focus:outline-1 focus:outline-orange-300 shadow-lg"
    //             />
    //           </div>
    //           <h2 className="border-b w-fit border-orange-400 text-orange-400 m-4 hover:text-orange-500 cursor-pointer">
    //             Mot de passe oublié ?
    //           </h2>
    //           <div className="flex items-end justify-end px-3 py-2 m-4">
    //             <input
    //               type="submit"
    //               value={"Se connecter"}
    //               className="bg-orange-400 px-4 py-2 rounded-md text-white hover:bg-orange-500 focus:bg-orange-500"
    //             />
    //           </div>
    //         </form>

    //         <p className="m-4">
    //           Pas encore de Compte ?{" "}
    //           <Link href="/auth/register/" className="text-orange-400 italic">
    //             S&apos;incrire
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col max-w-lg mx-auto px-2 mt-28">
      <form>
        <div className="space-y-2">
          <TextField
            id="email"
            name="email"
            type="email"
            label="Se Connecter avec votre email"
            placeholder="hello@me.com"
            autoComplete="email"
            required
            className={""}
          />
        </div>
        <ButtonNew
          type="submit"
          variant="outline"
          color="gray"
          className="mt-3 w-full"
          href={""}
        >
          Continue avec email
        </ButtonNew>
      </form>
      <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        ou
      </div>
      <LoginWithSocial nameSocial={"google"}>
        {" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="google"
          className="mr-8 w-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="red"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
      </LoginWithSocial>
      <LoginWithSocial nameSocial="facebook">
        <Facebook className="mr-8 w-5 text-blue-500" fill="blue" />
      </LoginWithSocial>
      <LoginWithSocial nameSocial="github">
        <Github className="mr-8 w-5" />
      </LoginWithSocial>
    </div>
  );
};

export default page;
