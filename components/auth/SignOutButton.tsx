"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return (
    <button
      className="bg-slate-200 text-xs rounded-full px-2 py-2 mx-3 shadow-2xl shadow-black"
      onClick={() => signOut()}
    >
      <LogOut color="white" className="text-xs" size={15} />
    </button>
  );
};

export default SignOutButton;
