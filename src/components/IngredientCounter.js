import React, { useState } from "react";
import { Button } from ".";
export const IngredientCounter = ({ name, icon }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button
        title={"-"}
        disabled={!counter}
        onClick={() => setCounter((prevState) => --prevState)}
      />
      <span className="counter">{counter}</span>
      <Button
        title={"+"}
        onClick={() => setCounter((prevState) => ++prevState)}
      />
    </div>
  );
};
