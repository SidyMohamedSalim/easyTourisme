"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SignOutButton from "@/components/auth/SignOutButton";
import ProfileMenu from "@/components/ui/ProfileMenu";
import { useSession } from "next-auth/react";
import AuthModal from "../components/auth/authModal";
import ButtonNew from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const { data: session } = useSession();
  const data = session?.session ?? session;

  return (
    <header>
      <div className="max-w-6xl mx-auto max-md:flex-col flex items-center justify-between py-2">
        <div className="flex justify-between  items-center max-md:w-full max-md:items-center max-md:px-3">
          <Link href={"/"} className=" ">
            <Image
              width={300}
              height={200}
              className="w-28"
              src={"/logo.png"}
              alt=""
            />
          </Link>
          <div className=" md:hidden flex items-center gap-2">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <X
                  size={15}
                  className="transition-transform rotate-180 duration-100"
                />
              ) : (
                <svg
                  className="fill-current h-3 w-3 transition rotate-90 duration-150 ease-in-out"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path
                    d="M0 0h20v20H0V0zm2 9h16v2H2V9zm0-5h16v2H2V4zm0 10h16v2H2v-2z"
                    fillRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu */}

        {/* ResponsiveMenu */}
        {isOpen && (
          <div className=" flex flex-col items-center justify-center  text-center  gap-1 md:hidden w-full bg-slate-100 py-3">
            <nav className=" text-md font-light w-full ">
              <div className="py-2 my-1 items-center flex flex-col hover:bg-white w-full">
                <Link href={"/"} className="px-4 text-sky-500 w-full">
                  Accueil
                </Link>
              </div>

              <div className="py-2 my-1 hover:bg-white">
                <Link href={"/tours"} className="px-4  w-full">
                  Destinations
                </Link>
              </div>
              <div className="py-2 my-1 hover:bg-white w-full">
                <Link href={"/about"} className="px-4 w-full">
                  Nous Contacter
                </Link>
              </div>
            </nav>
            {data ? (
              <div className="">
                <div className="py-2 my-1 text-center flex w-14 h-12 ">
                  <ProfileMenu image={data.user?.image} />
                </div>
              </div>
            ) : (
              <div className="">
                <div className="py-2 my-1">
                  <button onClick={() => setOpened(true)}>
                    S&apos;authenfier
                  </button>
                  <AuthModal opened={opened} setOpened={setOpened} />
                </div>
              </div>
            )}
          </div>
        )}
        {/*  */}

        <div className="flex  items-center mr-4 justify-evenly gap-12 max-md:hidden">
          <nav className="mr-14 text-md font-light ">
            <Link href={"/"} className="px-4 text-sky-500">
              Accueil
            </Link>
            <Link href={"/tours"} className="px-4">
              Destinations
            </Link>
            <Link href={"/about"} className="px-4">
              Nous Contacter
            </Link>
          </nav>

          <div className="">
            {data ? (
              <div className="my-1 text-center flex justify-center items-center ">
                <ProfileMenu image={data.user?.image} />
              </div>
            ) : (
              <>
                <button onClick={() => setOpened(true)}>
                  S&apos;authenfier
                </button>
                <AuthModal opened={opened} setOpened={setOpened} />
              </>
            )}
          </div>
        </div>

        {/* Fin menu */}
      </div>
    </header>
  );
};

export default Header;
