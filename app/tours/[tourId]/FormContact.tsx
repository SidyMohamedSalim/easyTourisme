"use client";
import React from "react";
import { Loader, NumberInput, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Mail, PhoneCall, User } from "lucide-react";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import {
  bookVsit,
  getBookingByTourId,
  removeBooking,
} from "../../../src/db/clientFetch";
import { toast } from "react-toastify";
import { queryKeys } from "../../../lib/query";

const FormContact = ({ tourId }: { tourId: string }) => {
  const { data: book } = useQuery({
    queryKey: queryKeys.byId(queryKeys.BookingName, tourId),
    queryFn: () => getBookingByTourId(tourId),
  });
  const queryClient = new QueryClient();

  const form = useForm({
    initialValues: {
      date: "",
      email: "",
      message: "",
      phone: "",
    },
    validate: {
      date: (value) => (value ? null : "Champ Requis"),
      email: (value) => (value ? null : "Champ Requis"),
    },
  });

  const data = form.values;

  const { mutate, isLoading } = useMutation({
    mutationKey: queryKeys.byId(queryKeys.BookingName, tourId),
    mutationFn: () =>
      book ? removeBooking(tourId) : bookVsit({ ...data, tourId }),
    onError: () => {
      toast.error("Une erreur est survenue. Veuillez Ressayer");
    },
    onSuccess: () => {
      toast.success(
        book
          ? "Annulation de contact Reussi."
          : "Prise de contact Reussi. Nous vous contacterons le plus vite possible"
      );
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: [queryKeys.all(queryKeys.BookingName)],
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      mutate();
    }
  };

  return (
    <div>
      {book ? (
        <div>
          {" "}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              mutate();
            }}
            className="w-full hover:bg-red-300 hover:text-white py-2 text-sm rounded-3xl mt-4 text-red-400 border-2 border-red-400 disabled:bg-white disabled:border font-bold"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader size={18} className="flex mx-auto" />
            ) : (
              "Annulé la  reservation"
            )}
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border rounded-sm p-6"
        >
          <TextInput
            type="email"
            placeholder="Email"
            id=""
            label="Email"
            withAsterisk
            className=" w-full focus:outline-none hover:outline-none my-3 text-sm"
            icon={<Mail size={15} />}
            {...form.getInputProps("email", { type: "input" })}
          />
          <div className="grid grid-cols-2 gap-4">
            <DatePickerInput
              label="Une date de preference ?"
              placeholder="date"
              mx="auto"
              maw={400}
              valueFormat="DD MMM YYYY"
              className=" text-sm w-full focus:outline-none hover:outline-none my-3"
              {...form.getInputProps("date")}
            />
            <TextInput
              label="Votre phone"
              placeholder="ex: +221685555555"
              id=""
              withAsterisk
              icon={<PhoneCall size={15} />}
              className=" w-full focus:outline-none hover:outline-none my-3 text-sm"
              {...form.getInputProps("phone", { type: "input" })}
            />
          </div>
          <Textarea
            label="Une précision ?"
            placeholder="Votre Message"
            {...form.getInputProps("message", { type: "input" })}
          />

          <button
            type="submit"
            className="w-full bg-sky-400 $ py-2 text-sm rounded-3xl mt-4 text-white hover:bg-sky-500 disabled:bg-white disabled:border"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader size={18} className="flex mx-auto" />
            ) : (
              "Nous Contacter"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default FormContact;
