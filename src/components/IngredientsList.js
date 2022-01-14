import React, { useContext } from "react";
import { Ingredient } from "../components";
import { IngredientsListContext } from "../contexts";

export const IngredientsList = () => {
  const { ingredientsList } = useContext(IngredientsListContext);
  const ingredients = ingredientsList.map((ingredient) => (
    <li className="ingredientContainer" key={ingredient.id}>
      <Ingredient {...ingredient} />
    </li>
  ));

  return <ul className="ingredientsList">{ingredients}</ul>;
};
