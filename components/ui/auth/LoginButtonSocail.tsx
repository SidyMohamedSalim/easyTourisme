"use client";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import ButtonNew from "../button";
import { PropsWithChildren } from "react";

const LoginWithSocial = ({
  nameSocial,
  children,
}: PropsWithChildren<{
  nameSocial: string;
}>) => {
  const searchParams = useSearchParams();

  return (
    <ButtonNew
      className="w-full my-4"
      onClick={() => signIn(nameSocial)}
      href={""}
    >
      {children}
      Continue avec {nameSocial}
    </ButtonNew>
  );
};

export default LoginWithSocial;
