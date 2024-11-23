
import React from "react"
import './App.css';



export default function Stock({ company }) {
    // Safe check: Ensure `company` and `company.stockHistory` are defined
    if (!company || !company.stockHistory) {
      return <p>No data available for this company.</p>;
    }
  
    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f4f8' }} className="back">
        <h2>{company.name} Stock Performance</h2> {/* Display company name */}
        <table style={{ borderCollapse: 'collapse', width: '60%', margin: 'auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Year</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>High (₹)</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Low (₹)</th>
            </tr>
          </thead>
          <tbody>
            {company.stockHistory.map((data) => (
              <tr key={data.id}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{data.year}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{data.high}</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>{data.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
