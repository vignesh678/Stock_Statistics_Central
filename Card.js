import React from "react";
import Stock from "./components/stock.jpeg";
import "./App.css";
export default function Card() {
  return (
    <>
    <div className="card">
      <div className="img-stock">
        <img src={Stock} alt="stock" className="img2" />
      </div>
      <div className="heading">
        <h1>Stock Statistics Central</h1>
      </div>
    </div>
    </>
  );
}
