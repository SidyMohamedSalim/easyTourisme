"use client";

import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { PasswordInput, TextInput } from "@mantine/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query";
import { addUser } from "../../../src/db/clientFetch";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconLock } from "@tabler/icons-react";
import ButtonNew from "../../../components/ui/button";

export const validateString = (value: string) => {
  return value?.length < 3 || value === null ? "Au moins 3 carateres" : null;
};

export const RegisterForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validate: {
      name: (value) => validateString(value),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email Incorrecte"),
      password: (value) =>
        value.length < 4 ? "Le mot de passe doit être superieur à 4" : null,
    },
  });

  const { name, email, password } = form.values;

  const { mutate, isLoading } = useMutation({
    mutationKey: queryKeys.all(queryKeys.userName),
    mutationFn: async () => {
      addUser({ name, email, password });
      signIn(undefined, { callbackUrl: "/" });
    },

    onError: () =>
      toast.error("Impossible de s'identifier. Veuillez ressayer", {
        duration: 5000,
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries(queryKeys.all(queryKeys.userName));
      toast.success("Connexion Reussi !!", { duration: 5000 });
      router.refresh();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setFormValues({ ...formValues });
      mutate();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="space-y-2  ">
        <TextInput
          radius={"md"}
          withAsterisk
          placeholder="Gueye"
          label="Nom"
          {...form.getInputProps("name", { type: "input" })}
        />
        <TextInput
          radius={"md"}
          withAsterisk
          placeholder="gueye@gmail.com"
          label="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          radius={"md"}
          placeholder="********"
          label="Mot de passe"
          {...form.getInputProps("password", { type: "input" })}
          icon={<IconLock size="1rem" />}
          withAsterisk
        />

        {/* <TextField
          id="name"
          label="Nom"
          placeholder="John Doe"
          autoComplete="email"
          className={"w-full"}
          required
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        /> */}
      </div>
      {/* <div className="space-y-2">
        <TextField
          id="email"
          label="Email"
          placeholder="hello@me.com"
          autoComplete="email"
          className={""}
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <TextField
          id="password"
          label="Mot de passe"
          placeholder="****"
          autoComplete="email"
          className={""}
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div> */}
      <ButtonNew
        type="submit"
        variant="outline"
        color="gray"
        className="mt-3 w-full"
        href={""}
        disabled={isLoading}
      >
        {isLoading ? "en cours..." : "Continue avec email"}
      </ButtonNew>
    </form>
  );
};
