import { client } from "../server/client";
import { BookVisitScheme } from "../Scheme/ZodSheme";
import { bookVsitType } from "../Scheme/Types/zodType";

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
