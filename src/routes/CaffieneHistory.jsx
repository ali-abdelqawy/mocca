import React, { useState } from "react";
import { Nav } from "../nav";

export const CaffieneHistory = () => {
  const [caffieneHistory] = useState(
    JSON.parse(localStorage.getItem("caffieneHistory"))
  );
  const caffieneList = caffieneHistory?.map((caffieneData) => (
    <tr key={caffieneData.id}>
      <td>{caffieneData.totalCaffeine}</td>
      <td>{caffieneData.currentDate}</td>
    </tr>
  ));

  return (
    <>
      <Nav />
      <div className="flex-center">
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
      </div>
    </>
  );
};
