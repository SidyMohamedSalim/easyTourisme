"use client";

import TextField from "@/components/form/TextField";
import ButtonNew from "@/components/ui/button";
import { useForm } from "@mantine/form";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { IconEyeCheck, IconEyeOff, IconLock } from "@tabler/icons-react";

export const validateString = (value: string) => {
  return value?.length < 3 || value === null ? "Au moins 3 carateres" : null;
};

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
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

  const onSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setFormValues({ ...formValues });
      onSubmit();
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
        disabled={loading}
      >
        {loading ? "en cours..." : "Continue avec email"}
      </ButtonNew>
    </form>
  );
};
