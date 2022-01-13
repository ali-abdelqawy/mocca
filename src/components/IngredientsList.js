import React from "react";
import { Ingredient } from "../components";
import { ingredients } from "../constants";

export const IngredientsList = () => {
  const ingredientsList = ingredients.map((ingredient) => (
    <li className="ingredientContainer" key={ingredient.id}>
      <Ingredient {...ingredient} />
    </li>
  ));

  return <ul className="ingredientsList">{ingredientsList}</ul>;
};
