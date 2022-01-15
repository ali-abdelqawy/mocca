import React, { useContext, useState } from "react";
import { Button } from ".";
import { TotalCaffeineContext } from "../contexts";
import moment from "moment";
import { useLocalStorage } from "../hooks";

export const OrderButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { totalCaffeine } = useContext(TotalCaffeineContext);
  const [buttonTitle, setButtonTitle] = useState("Order");
  const [caffieneHistory, setCaffieneHistory] = useLocalStorage(
    "caffieneHistory",
    []
  );

  const handleClick = () => {
    setIsLoading(true);
    setButtonTitle("Please wait until the drink is ready...");
    setTimeout(() => {
      setIsLoading(false);
      setButtonTitle("Your order is ready!");
      storeCaffiene();
    }, 2000);
  };

  const storeCaffiene = () => {
    const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    caffieneHistory.push({
      id: new Date().getTime(),
      totalCaffeine,
      currentDate,
    });
    setCaffieneHistory(caffieneHistory);
    localStorage.setItem("caffieneHistory", JSON.stringify(caffieneHistory));
  };

  return (
    <Button
      disabled={!totalCaffeine || isLoading}
      title={buttonTitle}
      style={{ margin: "10px auto", width: 300, padding: "15px 10px" }}
      onClick={() => handleClick()}
    />
  );
};
