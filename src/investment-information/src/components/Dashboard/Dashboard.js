import React from 'react';
import './Dashboard.css';
import CompanyContainer from '../Company-Container/CompanyContainer';

function Dashboard({ companies }) {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        {companies.map((company, index) => (
          <CompanyContainer 
            key={index} 
            companyName={company.companyName} 
            intrinsicValue={company.intrinsicValue} 
            priceEarningsRatio={company.priceEarningsRatio} 
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;