import { BedDouble, LucideIcon } from "lucide-react";
import React from "react";

const NavIcons = ({ title, Icon }: { title: string; Icon: LucideIcon }) => {
  return (
    <div className="flex justify-between px-3 py-3 border border-black rounded-lg shadow-md items-top  my-1 hover:bg-slate-900 hover:text-white">
      <h1 className="mr-24 font-medium text-xs">{title}</h1>
      <div className="pr-1 xl:pr-4">
        <Icon />
      </div>
    </div>
  );
};

export default NavIcons;
