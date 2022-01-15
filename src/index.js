import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, CaffieneHistory } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="caffiene-history" element={<CaffieneHistory />} />
        <Route
          path="*"
          element={
            <div className="flex-center" style={{ height: "80vh" }}>
              <p>Error 404, There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
