import React from "react";
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

const layout = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    <div>Voous etes deja connecte</div>;
  }

  return <div>{children}</div>;
};

export default layout;
