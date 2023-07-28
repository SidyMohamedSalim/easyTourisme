"use client";
import { Avatar, Button, Textarea, Loader, StarIcon } from "@mantine/core";
import React from "react";
import { useForm } from "@mantine/form";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../lib/query";
import { addReview } from "../../../src/db/clientFetch";
import { toast } from "react-toastify";
import { useState } from "react";
import AuthModal from "@/components/auth/authModal";
import { ReviewProps } from "@/src/types/tour";
import { ReviewWithUser } from "../../../src/types/tour";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const Reviews = ({ tourId, Reviews, userSessionEmail }: ReviewProps) => {
  const [valueRating, setValueRating] = useState(0);

  const queryCLient = new QueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm({
    initialValues: {
      message: "",
      rating: 0,
    },
    validate: {
      message: (value) => (value ? null : "le message est obligatoire"),
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: queryKeys.byId(queryKeys.reviewsName, tourId),
    mutationFn: (message: string) => addReview(tourId, message, valueRating),
    onError: () => toast.error("Il y'a eu une erreur"),
    onSuccess: () => {
      toast.success("Commentaire  Reussi");
    },
    onSettled: () => {
      queryCLient.invalidateQueries(queryKeys.all(queryKeys.reviewsName));
    },
  });

  const { message } = form.values;
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      mutate(message);
    }
  };

  return (
    <div className="w-full">
      {userSessionEmail ? (
        <form action="" onSubmit={(e) => handlerSubmit(e)} className=" my-10">
          <HalfRating value={valueRating} setValue={setValueRating} />
          <Textarea
            placeholder="Laissez un avis"
            {...form.getInputProps("message", { type: "input" })}
          />
          <button
            type="submit"
            className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 mt-3 disabled:bg-slate-600"
            disabled={isLoading}
          >
            {isLoading ? <Loader size={10} /> : "Commenter"}
          </button>
        </form>
      ) : (
        <div className="py-2 my-1">
          <button
            className="bg-white text-primary italic hover:bg-white hover:border-primary hover:border-b"
            onClick={() => setIsOpen(true)}
          >
            Connectez-vous et laissez un retour d&apos;experience
          </button>
          <AuthModal opened={isOpen} setOpened={setIsOpen} />
        </div>
      )}
      {Reviews.map((review) => (
        <OneReview review={review} key={review.id} />
      ))}
    </div>
  );
};

export const OneReview = ({ review }: { review: ReviewWithUser }) => {
  console.log(review.rating);

  return (
    <figure className="p-4 bg-slate-50 w-full my-4 rounded-sm ">
      <figcaption className="flex items-center mt-2 space-x-3">
        <div>
          <Avatar
            src={review.user.image}
            alt="user image"
            size={25}
            radius={"xl"}
          />
        </div>
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            {review.user.name}
          </cite>
          <cite className="pl-3 text-xs text-gray-500 dark:text-gray-400">
            {review.userEmail}
          </cite>
        </div>
      </figcaption>
      <blockquote>
        <Stack spacing={1} className="">
          <Rating
            name="size-large"
            size="small"
            defaultValue={review.rating}
            value={review.rating}
            readOnly
            max={5}
          />
        </Stack>
        <p className="text-base font-semibold text-gray-900 dark:text-white mx-2">
          {review.message}
        </p>
      </blockquote>
    </figure>
  );
};

export function HalfRating({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <Stack spacing={1} className="my-4">
      <Rating
        name="size-large"
        defaultValue={0}
        precision={0.1}
        max={5}
        onChange={(e, value) => {
          setValue(value ?? 0);
        }}
        size="large"
      />
    </Stack>
  );
}
