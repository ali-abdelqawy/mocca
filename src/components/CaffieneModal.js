import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { Button } from ".";

Modal.setAppElement("#root");

export const CaffieneModal = ({
  isModalOpen,
  setIsModalOpen,
  caffieneHistory,
}) => {
  const caffieneList = caffieneHistory?.map((caffieneData) => (
    <tr>
      <td>{caffieneData.totalCaffeine}</td>
      <td>{caffieneData.currentDate}</td>
    </tr>
  ));
  return (
    <Modal isOpen={isModalOpen}>
      <h1>Caffiene History</h1>
      {caffieneList ? (
        <table>
          <thead>
            <tr>
              <th>Total Caffiene</th>
              <th>Date Ordered</th>
            </tr>
          </thead>
          <tbody>{caffieneList}</tbody>
        </table>
      ) : (
        "No history found."
      )}
      <Button
        title="Close"
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
    </Modal>
  );
};
