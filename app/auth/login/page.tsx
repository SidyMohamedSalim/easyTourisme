/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import TextField from "../../../components/ui/form/TextField";
import ButtonNew from "../../../components/ui/button";
import LoginWithSocial from "@/components/ui/auth/LoginButtonSocail";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useState, ChangeEvent } from "react";

const page = async () => {
  const router = useRouter();
  const { data } = useSession();
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
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
        toast.success("Connexion reussi");
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);

      toast.error("Erreur de Connexion");
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (data?.user) {
    router.back();
  }
  return (
    <div className="flex flex-col max-w-lg mx-auto px-2 mt-28">
      <form>
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
      <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        ou
      </div>
      <LoginWithSocial nameSocial={"google"}>
        {" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="google"
          className="mr-8 w-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="red"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
      </LoginWithSocial>
    </div>
  );
};

export default page;
