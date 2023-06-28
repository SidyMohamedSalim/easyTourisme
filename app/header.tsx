import Menu from "@/components/ui/Menu";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const isOpen = false;
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
          <Menu isOpenned={isOpen} />
        </div>

        {/* Menu */}

        {/* ResponsiveMenu */}
        {!isOpen && (
          <div className=" flex flex-col items-center justify-center  text-center  gap-1 md:hidden w-full bg-slate-100 py-3">
            <nav className=" text-md font-light w-full ">
              <div className="py-2 my-1 items-center flex flex-col hover:bg-white">
                <Link href={"/"} className="px-4 text-orange-500">
                  Home
                </Link>
              </div>
              <div className="py-2 my-1 hover:bg-white">
                <Link href={"/about"} className="px-4">
                  About
                </Link>
              </div>
              <div className="py-2 my-1 hover:bg-white">
                <Link href={"/tours"} className="px-4 ">
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
