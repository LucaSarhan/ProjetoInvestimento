import React from 'react';
import './CompanyContainer.css';

function normalizeCompanyName(name) {
  return name
      .normalize('NFD') // Normalize to decompose combined letters into separate letters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // Remove all diacritical marks
      .toLowerCase(); // Then convert to lowercase
}

export function CompanyContainer({ companyName, intrinsicValue, priceEarningsRatio }) {
    const normalizedCompanyName = normalizeCompanyName(companyName);
    return (
        <div className="company-container-item">
          <button>Edit</button>
          <button>Delete</button>
          <h2>{companyName}</h2>
          <p>
            <span className="value-label">Intrinsic Value</span>
            <span>: </span>
            <span id={`${normalizedCompanyName}IV`} className="value">{intrinsicValue}</span>
          </p>
          <p>
             <span className="value-label">Price to Earnings Ratio</span> 
            <span>: </span>
            <span id={`${normalizedCompanyName}PE`} className="value">{priceEarningsRatio}</span>
          </p>
        </div>
    )
}

export default CompanyContainer;