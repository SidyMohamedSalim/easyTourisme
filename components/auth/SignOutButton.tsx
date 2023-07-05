"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button
      className="bg-orange-400 text-xs rounded-full px-2 py-2 mx-3"
      onClick={() => signOut()}
    >
      <LogOut color="white" />
    </button>
  );
};

export default SignOutButton;
