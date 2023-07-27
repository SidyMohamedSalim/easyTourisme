"use client";
import { Button, Textarea } from "@mantine/core";
import React from "react";

export const Review = () => {
  return (
    <div className="w-full">
      <form action="" className=" my-10">
        <Textarea placeholder="Laissez un avis" />
        <button
          type="submit"
          className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 mt-3"
        >
          Commenter
        </button>
      </form>
      <OneReview />
      <OneReview />
      <OneReview />
    </div>
  );
};

export const OneReview = () => {
  return (
    <figure className="p-4 bg-slate-50 w-full my-4 rounded-sm ">
      <blockquote>
        <p className="text-base font-semibold text-gray-900 dark:text-white">
          Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application.
        </p>
      </blockquote>
      <figcaption className="flex items-center mt-2 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
            CTO at Flowbite
          </cite>
        </div>
      </figcaption>
    </figure>
  );
};
