import React from "react";
import { IngredientCounter } from "./IngredientCounter";

export const Ingredient = ({ name, icon, caffeinePerShot }) => {
  return (
    <div className="ingredient">
      <img src={icon} className="ingredientIcon" alt="" />
      <h4 className="ingredientName">{name}</h4>
      <p>
        <strong>Caffiene per shot:</strong> {caffeinePerShot} MG
      </p>
      <IngredientCounter caffeinePerShot={caffeinePerShot} />
    </div>
  );
};
