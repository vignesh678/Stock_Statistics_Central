import React from "react";
import "./App.css";

export default function Stocktwo({ company }) {
  // Safe check: Ensure `company` and `company.stockHistory` are defined
  if (!company || !company.dividendHistory) {
    return <p>No data available for this company.</p>;
  }

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f0f4f8" }}
      className="back"
    >
      <h2>{company.name} Dividend and Y-O-Y Growth</h2> {/* Display company name */}
      <table
        style={{ borderCollapse: "collapse", width: "60%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>Year</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Dividend (₹)
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Growth (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {company.dividendHistory.map((data) => (
            <tr key={data.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {data.year}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {data.dividend}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                {data.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
