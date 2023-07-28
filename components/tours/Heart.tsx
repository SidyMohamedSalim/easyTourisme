"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useQuery, QueryClient, useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../lib/query";
import {
  getFavByTourID,
  deleteFav,
  addFav,
  getAllFav,
} from "../../src/db/clientFetch";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Heart = ({ isFav, tourId }: { isFav: boolean; tourId: string }) => {
  const router = useRouter();
  const [heartColor, setHeartColor] = useState("white");
  const queryClient = new QueryClient();

  // const { data, isLoading } = useQuery({
  //   queryKey: queryKeys.byId(queryKeys.favoritesName, tourId),
  //   queryFn: () => getFavByTourID(tourId),
  // });

  useEffect(() => {
    setHeartColor(isFav ? "#fa3e5f" : "white");
  }, [isFav]);

  const { mutate } = useMutation({
    mutationFn: () => {
      return isFav ? deleteFav(tourId) : addFav(tourId);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.all(queryKeys.favoritesName),
      });

      const previousValue = queryClient.getQueriesData(
        queryKeys.all(queryKeys.favoritesName)
      );

      queryClient.setQueryData(
        queryKeys.all(queryKeys.favoritesName),
        getAllFav()
      );
      setHeartColor("#fa3e5f");

      return { previousValue };
    },
    onSuccess: () => {
      toast.success(isFav ? "Retiré" : "Ajouté");
    },
    onError: (err, variables, context) => {
      setHeartColor("white");
      queryClient.setQueriesData(
        queryKeys.all(queryKeys.favoritesName),
        context?.previousValue
      );
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.all(queryKeys.favoritesName),
      });
      router.refresh();
    },
  });

  const handleLike = () => {
    setHeartColor(!isFav ? "white" : "#fa3e5f");
    mutate();
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
