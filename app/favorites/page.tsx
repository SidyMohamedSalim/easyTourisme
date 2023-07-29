import React from "react";
import BlocB from "../../components/ui/blocs/blocB";
import FormSearch from "../../components/search/formSearch";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { prisma } from "../../src/db/prisma";

const page = async () => {
  // const session = await getServerSession(authOptions);
  // const favs = await prisma.favoritesTours.findMany({
  //   where: {
  //     userEmail: session?.user?.email ?? "",
  //   },
  //   select: {
  //     tour: true,
  //   },
  // });

  <div>
    <FormSearch />

    <section className="relative my-28 mx-3">
      <div className="max-w-5xl mx-auto my-4 h-84 bg-covers">
        <div className="">
          {/* desc section */}
          <div>
            <h1 className="font-semibold text-4xl mb-1">
              Des destinations à visiter
            </h1>
          </div>
          {/* content */}
          <div className="grid  max-md:grid-cols-2 grid-cols-3  gap-4">
            {/* {favs.map((fav) => (
              <BlocB
                key={fav.tour.id}
                image={fav.tour.image}
                city={fav.tour.city}
                id={fav.tour.id}
                title={fav.tour.title}
                address={fav.tour.address}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  </div>;
};

export default page;
