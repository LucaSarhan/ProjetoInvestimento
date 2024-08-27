import React from 'react';
import CompanyContainer from '../Company-Container/CompanyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard({ companies }) {
  return (
    <div>
      <h1 className="text-center my-4">Dashboard</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-1">
        {companies.map((company, index) => (
          <div className="col" key={index}>
            <CompanyContainer 
              companyName={company.companyName} 
              intrinsicValue={company.intrinsicValue} 
              priceEarningsRatio={company.priceEarningsRatio}
              onClick={CompanyContainer.handleShow}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
