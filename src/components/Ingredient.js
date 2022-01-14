import React from "react";
import { IngredientCounter } from "./IngredientCounter";

export const Ingredient = ({ caffeinePerShot, icon, name }) => {
  return (
    <div className="ingredient">
      <img src={icon} className="ingredientIcon" alt="" />
      <h4 className="ingredientName">{name}</h4>
      <p>
        <strong>Caffiene Per Shot:</strong> {caffeinePerShot} MG
      </p>
      <IngredientCounter caffeinePerShot={caffeinePerShot} />
    </div>
  );
};
