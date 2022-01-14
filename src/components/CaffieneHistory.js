import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Button, CaffieneModal } from ".";
import { NewOrderContext } from "../contexts";

export const CaffieneHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isNewOrder } = useContext(NewOrderContext);
  const [caffieneHistory, setCaffieneHistory] = useState([]);

  useEffect(() => {
    setCaffieneHistory(JSON.parse(localStorage.getItem("caffieneHistory")));
  }, [isNewOrder]);

  return (
    <>
      <Button
        title={"Caffeine History"}
        className="largeButton"
        onClick={() => setIsModalOpen(true)}
      />
      <CaffieneModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        caffieneHistory={caffieneHistory}
      />
    </>
  );
};
