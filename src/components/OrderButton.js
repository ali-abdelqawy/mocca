import React, { useContext, useState } from "react";
import { Button } from ".";
import { NewOrderContext, TotalCaffeineContext } from "../contexts";
import moment from "moment";

export const OrderButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { totalCaffeine } = useContext(TotalCaffeineContext);
  const { setIsNewOrder } = useContext(NewOrderContext);
  const [buttonTitle, setButtonTitle] = useState("Order");

  const handleClick = () => {
    setIsLoading(true);
    setButtonTitle("Please wait until the drink is ready...");
    setTimeout(() => {
      setIsLoading(false);
      setButtonTitle("Your order is ready!");
      storeCaffiene();
      setIsNewOrder(true);
    }, 2000);
  };

  const storeCaffiene = () => {
    const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    const caffieneHistory = JSON.parse(localStorage.getItem("caffieneHistory"));
    const caffieneAmount =
      caffieneHistory === null
        ? JSON.stringify([
            { id: caffieneHistory.length + 1, totalCaffeine, currentDate },
          ])
        : JSON.stringify([...caffieneHistory, { totalCaffeine, currentDate }]);
    localStorage.setItem("caffieneHistory", caffieneAmount);
  };

  return (
    <Button
      disabled={!totalCaffeine || isLoading}
      title={buttonTitle}
      style={{ margin: "0 auto", width: 300, padding: "15px 10px" }}
      onClick={() => handleClick()}
    />
  );
};
