"use client";
import React from "react";
import { NumberInput, Textarea, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Mail, PhoneCall, User } from "lucide-react";

const FormContact = () => {
  return (
    <form action="" className="border rounded-sm p-6">
      <TextInput
        type="text"
        label="Votre Nom"
        placeholder="Nom"
        id=""
        className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
        icon={<User size={15} />}
      />
      <TextInput
        type="text"
        placeholder="Email"
        id=""
        label="Email"
        required
        withAsterisk
        className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
        icon={<Mail size={15} />}
      />

      <div className="grid grid-cols-2 gap-4">
        <DatePickerInput
          label="Une date de preference ?"
          placeholder="date"
          mx="auto"
          maw={400}
          className="border-b text-sm w-full focus:outline-none hover:outline-none my-3"
        />
        <NumberInput
          label="Votre phone"
          placeholder="ex: +221685555555"
          id=""
          withAsterisk
          icon={<PhoneCall size={15} />}
          className="border-b w-full focus:outline-none hover:outline-none my-3 text-sm"
        />
      </div>
      <Textarea label="Une précision ?" placeholder="Votre Message" />
      <button
        type="submit"
        className="w-full bg-sky-400  py-2 text-sm rounded-3xl mt-4 text-white hover:bg-sky-500"
      >
        Nous Contacter
      </button>
    </form>
  );
};

export default FormContact;
