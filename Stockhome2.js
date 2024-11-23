import React from "react";
import Stocktwo from "./Stocktwo";
import company from "./Stockdata2"; // Import JSON data

export default function Stockhome2() {
  return (
    <>
      <Stocktwo company={company[0]} /> {/* Company A */}
      <Stocktwo company={company[1]} />
      <Stocktwo company={company[2]} />
      <Stocktwo company={company[3]} />
      <Stocktwo company={company[4]} /> {/* Company B */}
    </>
  );
}