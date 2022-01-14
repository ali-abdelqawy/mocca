import React, { useContext, useState } from "react";
import { Button } from ".";
import { TotalCaffeineContext } from "../contexts/totalCaffeineContext";
export const IngredientCounter = ({ caffeinePerShot }) => {
  const [counter, setCounter] = useState(0);
  const { setTotalCaffeine } = useContext(TotalCaffeineContext);

  const onDecrementClick = () => {
    setCounter((prevState) => --prevState);
    if (caffeinePerShot > 0)
      setTotalCaffeine(
        (prevState) => parseInt(prevState) - parseInt(caffeinePerShot)
      );
  };

  const onIncrementClick = () => {
    setCounter((prevState) => ++prevState);
    if (caffeinePerShot > 0)
      setTotalCaffeine(
        (prevState) => parseInt(prevState) + parseInt(caffeinePerShot)
      );
  };

  return (
    <div>
      <Button title={"-"} disabled={!counter} onClick={onDecrementClick} />
      <span className="counter">{counter}</span>
      <Button title={"+"} onClick={onIncrementClick} />
    </div>
  );
};
