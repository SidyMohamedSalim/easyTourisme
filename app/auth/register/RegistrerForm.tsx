"use client";

import TextField from "@/components/form/TextField";
import ButtonNew from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-2  ">
        <TextField
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
        />
      </div>
      <div className="space-y-2">
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
      </div>
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
