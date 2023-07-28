"use client";
import React from "react";
import { Loader, NumberInput, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Mail, PhoneCall, User } from "lucide-react";
import { useForm } from "@mantine/form";
import {
  useMutation,
  useQuery,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import {
  bookVsit,
  getBookingByTourId,
  removeBooking,
} from "../../../src/db/clientFetch";
import { queryKeys } from "../../../lib/query";
import { sendContact } from "../../../src/db/clientFetch";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormContact = ({ tourId }: { tourId: string }) => {
  const queryCLient = useQueryClient();
  const router = useRouter();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate: {
      email: (value) => (value ? null : "Champ Requis"),
    },
  });

  const { name, email, phone } = form.values;

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVsit({ email, name, phone, tourId }),
    onError: () => toast.error("Il y'a eu une erreur", { duration: 10000 }),
    onSuccess: () => {
      toast.success(
        "Prise de contact Reussi !!.\n\nNous allons vous appelez le plus tôt que possible.",
        {
          duration: 10000,
        }
      );
      void queryCLient.invalidateQueries({
        queryKey: queryKeys.all(queryKeys.reviewsName),
      });
      form.reset();
      router.refresh();
    },
    onSettled: () => {
      void queryCLient.invalidateQueries({
        queryKey: queryKeys.all(queryKeys.reviewsName),
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
      <form onSubmit={(e) => handleSubmit(e)} className="border rounded-sm p-6">
        <TextInput
          type="text"
          placeholder="Nom"
          id=""
          label="Nom"
          className=" w-full focus:outline-none hover:outline-none my-3 text-sm"
          icon={<Mail size={15} />}
          {...form.getInputProps("name", { type: "input" })}
        />
        <TextInput
          withAsterisk
          type="email"
          placeholder="Email"
          id=""
          label="Email"
          className=" w-full focus:outline-none hover:outline-none my-3 text-sm"
          icon={<Mail size={15} />}
          {...form.getInputProps("email", { type: "input" })}
        />
        <div>
          <TextInput
            label="Votre phone"
            placeholder="ex: +221685555555"
            id=""
            icon={<PhoneCall size={15} />}
            className=" w-full focus:outline-none hover:outline-none my-3 text-sm"
            {...form.getInputProps("phone", { type: "input" })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-400 $ py-2 text-sm rounded-3xl mt-4 text-white hover:bg-sky-500 disabled:bg-white disabled:border"
        >
          {isLoading ? (
            <Loader size={18} className="flex mx-auto" />
          ) : (
            " Nous Contacter"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormContact;
