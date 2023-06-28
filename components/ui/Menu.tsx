"use client";
import { X } from "lucide-react";
import { useState } from "react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <X
            size={15}
            className="transition-transform rotate-180 duration-100"
          />
        ) : (
          <svg
            className="fill-current h-3 w-3 transition rotate-90 duration-150 ease-in-out"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 0h20v20H0V0zm2 9h16v2H2V9zm0-5h16v2H2V4zm0 10h16v2H2v-2z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default Menu;
