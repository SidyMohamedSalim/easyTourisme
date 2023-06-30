import { faker } from "@faker-js/faker";
import { prisma } from "../src/db/prisma";
import { randomInt } from "crypto";

async function main() {
  //   const usersPromises = [];
  //   for (let i = 0; i < 10; i++) {
  //     usersPromises.push(
  //       await prisma.user.create({
  //         data: {
  //           email: faker.internet.email(),
  //           password: faker.internet.password(),
  //           username: faker.person.firstName(),
  //         },
  //       })
  //     );
  //   }
  //   const tourProamises = [];
  //   for (let i = 0; i < 20; i++) {
  //     tourProamises.push(
  //       await prisma.tour.create({
  //         data: {
  //           distance: faker.number.float({ max: 100, min: 1, precision: 0.2 }),
  //           rating: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
  //           maxGroupSize: faker.number.int(100),
  //           featured: faker.datatype.boolean(),
  //           title: faker.lorem.lines(),
  //           price: Number(faker.commerce.price()),
  //           image: faker.image.urlLoremFlickr({ category: "nature" }),
  //           city: faker.location.city(),
  //           adress: faker.location.streetAddress(),
  //         },
  //       })
  //     );
  //   }
  //   const reviewsPromises = [];
  //   for (let i = 0; i < 40; i++) {
  //     const indexTour = randomInt(tourProamises.length);
  //     const indexUser = randomInt(usersPromises.length);
  //     const Tour = tourProamises[indexTour];
  //     const user = usersPromises[indexUser];
  //     reviewsPromises.push(
  //       await prisma.review.create({
  //         data: {
  //           username: user.username,
  //           text: faker.lorem.paragraph(),
  //           rating: faker.number.int({ min: 0, max: 5 }),
  //           tourId: Tour.id,
  //           userId: user.id,
  //         },
  //       })
  //     );
  //   }
  //   const userTourPromises = [];
  //   for (let i = 0; i < 10; i++) {
  //     const indexTour = randomInt(tourProamises.length);
  //     const indexUser = randomInt(usersPromises.length);
  //     const Tour = tourProamises[indexTour];
  //     const user = usersPromises[indexUser];
  //     userTourPromises.push(
  //       await prisma.userTour.create({
  //         data: {
  //           userId: user.id,
  //           tourId: Tour.id,
  //         },
  //       })
  //     );
  //   }
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
