import { Heart, LucideIcon } from "lucide-react";
import React from "react";

type HeadElIconProps = {
  title: string;
  Icon: LucideIcon;
};
const HeadElIcon = ({ title, Icon }: HeadElIconProps) => {
  return (
    <div className="flex cursor-pointer font-medium items-center px-3 py-3 rounded-3xl hover:bg-slate-100">
      <span className="mr-1 max-md:text-2xl">
        <Icon />
      </span>
      <h1 className="max-md:hidden">{title}</h1>
    </div>
  );
};

export default HeadElIcon;
