import Image from "next/image";
import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h1 className="font-semibold text-4xl mb-1">Nos Valeurs</h1>
          <p className="text-md py-3">
            Venez découvrir le summum du luxe tout compris des Caraïbes des
            vacances en couple dans les BEACHES Resorts. Nos stations balnéaires
            de luxe, situé le long des décors tropicaux les plus magnifiques et
            des plages exquises à Sainte-Lucie, Jamaïque, Antigua, Bahamas,
            Grenade, Barbade et Curaçao, propose des repas gastronomiques
            illimités, des bars uniques servant liqueurs et vins de qualité
            supérieure, et tous les sports terrestres et nautiques, y compris
            green fees gratuits dans nos complexes de golf et plongée certifiée
            plongée dans la plupart des stations. Si vous planifiez un mariage,
            BEACHES est le leader des mariages et des forfaits lune de miel dans
            les Caraïbes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} className="bg-primary" />
            </button>
            <div>
              <h3 className="py-2">GUIDE TOURISTIQUE</h3>
              <p className="py-1">
                EXPLOREZ LES MEILLEURS ENDROITS DU SENEGAL AVEC NOUS
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">ACCOMPAGNEMENT</h3>
              <p className="py-1">
                NE RATEZ RIEN DE LA DECOUVERTE DES VALEURS SENEGALAISES
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/images/gallery-01.jpg"}
          className="w-full h-full"
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Services;
