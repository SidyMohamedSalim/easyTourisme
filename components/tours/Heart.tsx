"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useQuery, QueryClient, useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../lib/query";
import { toast } from "react-toastify";
import { getFavByTourID, deleteFav, addFav } from "../../src/db/clientFetch";

const Heart = ({
  colorDefault,
  tourId,
}: {
  colorDefault: string;
  tourId: string;
}) => {
  const [heartColor, setHeartColor] = useState("white");
  const queryClient = new QueryClient();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.byId(queryKeys.favoritesName, tourId),
    queryFn: () => getFavByTourID(tourId),
  });

  useEffect(() => {
    setHeartColor(!data ? colorDefault : "#fa3e5f");
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: () => {
      return data ? deleteFav(tourId) : addFav(tourId);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: queryKeys.byId(queryKeys.favoritesName, tourId),
      });

      const previousValue = queryClient.getQueriesData(
        queryKeys.byId(queryKeys.favoritesName, tourId)
      );

      queryClient.setQueryData(
        queryKeys.byId(queryKeys.favoritesName, tourId),
        getFavByTourID(tourId)
      );

      return { previousValue };
    },
    onSuccess: () => {
      toast.success("Ajouté aux favories");
    },
    onError: (err, variables, context) => {
      queryClient.setQueriesData(
        queryKeys.byId(queryKeys.favoritesName, tourId),
        context?.previousValue
      );
    },
    onSettled: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.byId(queryKeys.favoritesName, tourId),
      });
    },
  });

  const handleLike = () => {
    mutate();
    setHeartColor(!data ? colorDefault : "#fa3e5f");
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
