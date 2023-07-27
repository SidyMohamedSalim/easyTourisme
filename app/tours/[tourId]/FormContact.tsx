"use client";
import React from "react";
import { Loader, NumberInput, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Mail, PhoneCall, User } from "lucide-react";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { bookVsit } from "../../../src/db/clientFetch";
import { toast } from "react-toastify";

const FormContact = ({ tourId }: { tourId: string }) => {
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
    mutationKey: ["bookVisit"],
    mutationFn: () => bookVsit({ ...data, tourId }),
    onError: () => toast.error("Une erreur est survenue. Veuillez Ressayer"),
    onSuccess: () =>
      toast.success(
        "Prise de contact Reussi. Nous vous contacterons le plus vite possible"
      ),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      mutate();
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="border rounded-sm p-6">
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
  );
};

export default FormContact;
