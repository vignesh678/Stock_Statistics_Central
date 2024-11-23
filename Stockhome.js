import React from "react";
import Stock from "./Stock";
import companys from "./Stockdata"; // Import JSON data

export default function Stockhome() {
  return (
    <>
      <Stock company={companys[0]} /> {/* Company A */}
      <Stock company={companys[1]} />
      <Stock company={companys[2]} />
      <Stock company={companys[3]} />
      <Stock company={companys[4]} /> {/* Company B */}
    </>
  );
}