import { faker } from "@faker-js/faker";
import { prisma } from "../src/db/prisma";
import { randomInt } from "crypto";
// import { hash } from "bcryptjs";

async function main() {
  // const usersPromises = [];
  // for (let i = 0; i < 10; i++) {
  //   usersPromises.push(
  //     await prisma.user.create({
  //       data: {
  //         email: faker.internet.email(),
  //         password: faker.internet.password(),
  //         username: faker.person.firstName(),
  //       },
  //     })
  //   );
  // }
  const tourProamises = [];
  for (let i = 0; i < 20; i++) {
    tourProamises.push(
      await prisma.tour.create({
        data: {
          title: faker.lorem.words({ min: 1, max: 3 }),
          description: faker.lorem.paragraph({ min: 2, max: 5 }),
          price: Number(faker.commerce.price()),
          image: faker.image.urlLoremFlickr({ category: "nature" }),
          city: faker.location.city(),
          country: faker.location.country(),
          address: faker.location.streetAddress(),
        },
      })
    );
  }
  // // const reviewsPromises = [];
  // for (let i = 0; i < 40; i++) {
  //   const indexTour = randomInt(tourProamises.length);
  //   const indexUser = randomInt(usersPromises.length);
  //   const Tour = tourProamises[indexTour];
  //   const user = usersPromises[indexUser];
  //   reviewsPromises.push(
  //     await prisma.review.create({
  //       data: {
  //         username: user.username,
  //         text: faker.lorem.paragraph(),
  //         rating: faker.number.int({ min: 0, max: 5 }),
  //         tourId: Tour.id,
  //         userId: user.id,
  //       },
  //     })
  //   );
  // }
  // const userTourPromises = [];
  // for (let i = 0; i < 10; i++) {
  //   const indexTour = randomInt(tourProamises.length);
  //   const indexUser = randomInt(usersPromises.length);
  //   const Tour = tourProamises[indexTour];
  //   const user = usersPromises[indexUser];
  //   userTourPromises.push(
  //     await prisma.userTour.create({
  //       data: {
  //         userId: user.id,
  //         tourId: Tour.id,
  //       },
  //     })
  //   );
  // }
  // const password = await hash("password123", 12);
  // const user = await prisma.user.upsert({
  //   where: { email: "admin@admin.com" },
  //   update: {},
  //   create: {
  //     email: "admin@admin.com",
  //     name: "Admin",
  //     // password: "salim2019",
  //   },
  // });
  // console.log({ user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
