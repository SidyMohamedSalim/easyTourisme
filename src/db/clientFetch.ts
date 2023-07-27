import { client } from "../server/client";
import { BookVisitScheme } from "../Scheme/ZodSheme";
import { bookVsitType } from "../Scheme/Types/zodType";

export const getAllBooking = async (tourId: string) => {
  return await client(`/api/booking`, {
    method: "GET",
  });
};

export const bookVsit = async ({
  date,
  email,
  message,
  phone,
  tourId,
}: bookVsitType & { tourId: string }) => {
  return await client(`/api/booking/${tourId}`, {
    data: { date, email, message, phone },
    zodSchema: BookVisitScheme,
    method: "POST",
  });
};
export const getBookingByTourId = async (tourId: string) => {
  return await client(`/api/booking/${tourId}`, {
    method: "GET",
  });
};

export const removeBooking = async (tourId: string) => {
  return await client(`/api/booking/${tourId}`, {
    method: "DELETE",
  });
};

export const getAllFav = async () => {
  return await client(`/api/favorite`, {
    method: "GET",
  });
};

export const getFavByTourID = async (tourId: string) => {
  return await client(`/api/favorite/${tourId}`, {
    method: "GET",
  });
};

export const addFav = async (tourId: string) => {
  return await client(`/api/favorite/${tourId}`, {
    method: "POST",
  });
};

export const deleteFav = async (tourId: string) => {
  return await client(`/api/favorite/${tourId}`, {
    method: "DELETE",
  });
};
