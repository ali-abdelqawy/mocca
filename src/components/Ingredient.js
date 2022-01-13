import React from "react";
import { IngredientCounter } from "./IngredientCounter";

export const Ingredient = ({
  name,
  icon,
  caffeinePerShot,
  setTotalCaffeine,
}) => {
  return (
    <div className="ingredient">
      <img src={icon} className="ingredientIcon" />
      <h4 className="ingredientName">{name}</h4>
      <p>
        <strong>Caffiene per shot:</strong> {caffeinePerShot} MG
      </p>
      <IngredientCounter
        setTotalCaffeine={setTotalCaffeine}
        caffeinePerShot={caffeinePerShot}
      />
    </div>
  );
};
