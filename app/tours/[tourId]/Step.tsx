import React from "react";

export const Step = ({
  title,
  activities,
}: {
  title: string;
  activities: string[];
}) => {
  return (
    <div className="my-5">
      <h1 className="text-primary text-lg font-sm font-bold mb-2">
        Jour 1- Tanger – Tétouan - Chefchaouen
      </h1>
      <div className="text-base font-medium">
        <p>Après le petit déjeuner, départ pour la visite de Tanger</p>
        <p>Départ vers chaouen , visite de la ville</p>
        <p>Diner et logement à chaouen</p>
      </div>
    </div>
  );
};
