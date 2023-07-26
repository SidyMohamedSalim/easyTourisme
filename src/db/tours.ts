import { prisma } from "./prisma";

export const allTours = async () => await prisma.tour.findMany();

export const Besttours = async () =>
  await prisma.tour.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

export const lastTours = async () =>
  await prisma.tour.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

export const findTourbyId = async (id: string) =>
  await prisma.tour.findUnique({
    where: {
      id,
    },
  });
