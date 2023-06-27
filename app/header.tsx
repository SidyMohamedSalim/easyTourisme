import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3">
        <div>
          <Image
            width={300}
            height={200}
            className="w-28"
            src={"/images/logo.png"}
            alt=""
          />
        </div>
        <div className="flex justify-evenly gap-12">
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
      </div>
    </header>
  );
};

export default Header;
