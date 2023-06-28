"use client";
import Menu from "@/components/ui/Menu";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="max-w-5xl mx-auto max-md:flex-col flex items-center justify-between py-3 ">
        <div className="flex justify-between max-md:w-full max-md:items-center max-md:px-3">
          <div className=" ">
            <Image
              width={300}
              height={200}
              className="w-28"
              src={"/images/logo.png"}
              alt=""
            />
          </div>
          <div className="block md:hidden">
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
                <Link href={"/"} className="px-4 text-orange-500 w-full">
                  Home
                </Link>
              </div>
              <div className="py-2 my-1 hover:bg-white w-full">
                <Link href={"/about"} className="px-4 w-full">
                  About
                </Link>
              </div>
              <div className="py-2 my-1 hover:bg-white">
                <Link href={"/tours"} className="px-4  w-full">
                  Tour
                </Link>
              </div>
            </nav>
            <div className="">
              <div className="py-2 my-1 hover:bg-white">
                <Link className="font-semibold p-4" href={"/auth/login"}>
                  Login
                </Link>
              </div>
              <div className="py-2 my-1">
                <Link
                  className="bg-orange-400 rounded-2xl px-4 py-2"
                  href={"/auth/register"}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
        {/*  */}

        <div className="flex justify-evenly gap-12 max-md:hidden">
          <nav className="mr-14 text-md font-light">
            <Link href={"/"} className="px-4 text-orange-500">
              Home
            </Link>
            <Link href={"/about"} className="px-4">
              About
            </Link>
            <Link href={"/tours"} className="px-4">
              Tour
            </Link>
          </nav>
          <div className="">
            <Link className="font-semibold p-4" href={"/auth/login"}>
              Login
            </Link>
            <Link
              className="bg-orange-400 rounded-2xl px-4 py-2"
              href={"/auth/register"}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Fin menu */}
      </div>
    </header>
  );
};

export default Header;
