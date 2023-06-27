import React from "react";

const Btn = ({ title, isWhite }: { title: string; isWhite?: boolean }) => {
  return (
    <button
      className={
        isWhite
          ? "bg-white text-black px-6 py-3 my-4 rounded-3xl hover:bg-black hover:text-white"
          : "bg-black px-6 py-3 my-4 rounded-3xl text-white hover:bg-white hover:text-black"
      }
    >
      {title}
    </button>
  );
};

export default Btn;
