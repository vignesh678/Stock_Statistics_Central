import React from "react";
import "./App.css";

export default function Stock2({ companys }) {
  // Safe check: Ensure `company` and `company.stockHistory` are defined
  if (!companys || !companys.stockHistory) {
    return <p>No data available for this company.</p>;
  }

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#f0f4f8" }}
      className="back"
    >
      <h2>{companys.name} Stock Performance</h2> {/* Display company name */}
      <table
        style={{ borderCollapse: "collapse", width: "60%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>Year</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              High (₹)
            </th>
            <th style={{ border: "1px solid black", padding: "10px" }}>
              Low (₹)
            </th>
          </tr>
        </thead>
        <tbody>
          {companys.dividendHistory.map((data) => (
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
