import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import NewsLetters from "./NewsLetters";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-28">
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col px-4">
          <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
              <div className="flex justify-center items-center text-3xl font-semibold text-gray-900 ">
                <Image
                  src="/logo.png"
                  alt="logo du site"
                  height={50}
                  width={100}
                />
              </div>
              <p className="my-6 text-gray-500 dark:text-gray-400">
                Bienvenue au Sénégal, où la générosité de la nature rencontre
                l&apos;hospitalité du cœur, offrant aux touristes un voyage
                authentique et inoubliable
              </p>

              <ul className="flex flex-wrap justify-center items-center mb-6 font-bold text-gray-900 dark:text-white">
                <li>
                  <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="mr-4 hover:underline md:mr-6">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="mr-4 hover:underline md:mr-6">
                    Nous Contactez
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                  <Facebook />
                </Link>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                  <Instagram />
                </Link>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                  <Twitter />
                </Link>
              </ul>
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023-2024{" "}
                <Link href="#" className="hover:underline">
                  SenegalPremiumTour
                </Link>
                . Tous droits réservés.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
