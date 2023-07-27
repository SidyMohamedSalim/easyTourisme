"use client";
import React from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Heart = ({ colorDefault }: { colorDefault: string }) => {
  const [heartColor, setHeartColor] = useState("white");

  const handleLike = () => {
    setHeartColor((prev) => (prev === "#fa3e5f" ? colorDefault : "#fa3e5f"));
  };
  return (
    <div className="cursor-pointer">
      <AiFillHeart
        size={30}
        color={heartColor}
        onClick={(e) => {
          e.stopPropagation();
          handleLike();
        }}
      />
    </div>
  );
};

export default Heart;
