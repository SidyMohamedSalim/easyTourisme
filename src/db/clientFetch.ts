import { client } from "../server/client";
import { BookVisitScheme } from "../Scheme/ZodSheme";
import { bookVsitType } from "../Scheme/Types/zodType";
import { Booking } from "@prisma/client";

export const getAllBooking = async (tourId: string) => {
  return await client(`/api/booking`, {
    method: "GET",
  });
};

export const bookVsit = async ({
  email,
  name,
  phone,
  tourId,
}: bookVsitType & { tourId: string }) => {
  return await client(`/api/booking/${tourId}`, {
    data: { email, name, phone },
    zodSchema: BookVisitScheme,
    method: "POST",
  });
};
export const getBookingByTourId = async (tourId: string): Booking => {
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

export const getAllReviews = async (tourId: string) => {
  return await client(`/api/review`, {
    method: "GET",
    data: { tourId },
  });
};

export const getReviewID = async (tourId: string) => {
  return await client(`/api/review/${tourId}`, {
    method: "GET",
  });
};

export const addReview = async (
  tourId: string,
  message: string,
  valueRating: number
) => {
  return await client(`/api/review/${tourId}`, {
    method: "POST",
    data: { message, rating: valueRating },
  });
};

export const deleteReview = async (tourId: string, ReviewId: string) => {
  return await client(`/api/review/${tourId}`, {
    method: "DELETE",
    data: { ReviewId },
  });
};

export const sendContact = async (
  tourId: string,
  date: string,
  email: string,
  message: string,
  phone: string
) => {
  return await client(`/api/booking/${tourId}/contact`, {
    method: "POST",
    data: { message, date, email, phone },
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
  });
};
