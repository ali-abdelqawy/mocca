import React from "react";
import { IngredientCounter } from "./IngredientCounter";

export const Ingredient = ({ name, icon }) => {
  return (
    <div className="ingredient">
      <img src={icon} className="ingredientIcon" />
      <h4 className="ingredientName">{name}</h4>

      {name !== "Add" && <IngredientCounter />}
    </div>
  );
};
