import React, { useContext, useState } from "react";
import { IngredientsListContext } from "../contexts";

export const AddIngredient = () => {
  const [ingredientName, setIngredientName] = useState("");
  const [caffeinePerShot, setCaffeinePerShot] = useState();
  const { setIngredientsList } = useContext(IngredientsListContext);

  const handleSubmit = () =>
    setIngredientsList((prevValue) => {
      const ingredient = prevValue.find(
        (ingredient) => ingredient.name === ingredientName
      );
      if (
        ingredient ||
        !ingredientName ||
        caffeinePerShot < 0 ||
        caffeinePerShot > 1000
      )
        return prevValue;
      return [
        ...prevValue,
        {
          id: prevValue.length + 1,
          name: ingredientName,
          caffeinePerShot,
          icon: "https://cdn-icons-png.flaticon.com/512/1501/1501060.png",
        },
      ];
    });
  return (
    <div className="addIngredient">
      <form className="addIngredientForm">
        <input
          type="text"
          placeholder="Ingredient Name"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Caffeine per Shot"
          min={0}
          onChange={(e) => setCaffeinePerShot(e.target.value)}
          value={caffeinePerShot}
        />
        <button
          className="button"
          type="button"
          disabled={!ingredientName || !caffeinePerShot}
          onClick={() => handleSubmit()}
        >
          Add Ingredient
        </button>
      </form>
    </div>
  );
};
