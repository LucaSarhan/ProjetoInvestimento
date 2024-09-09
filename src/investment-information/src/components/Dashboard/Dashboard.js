import React, { useEffect, useState } from 'react';
import CompanyContainer from '../CompanyContainer/CompanyContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function Dashboard() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/companies');
        const data = await response.json();
        console.log(data);  // Log the data to verify it's an array
        if (Array.isArray(data)) {  // Check if data is an array directly
          setCompanies(data);  // Set companies directly from data
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
  
    fetchCompanies();
  }, []);
   
  return (
    <Col>
      <h1 className="text-center my-4">Dashboard</h1>
      <Row className="row-cols-1 row-cols-md-2 g-4 mx-1">
        {Array.isArray(companies) && companies.map((company, index) => (
          <Col key={index}>
            <CompanyContainer 
              companyName={company.company_name} 
              intrinsicValue={company.intrinsic_value} 
              priceEarningsRatio={company.price_earnings_ratio}
              dividendYield={company.dividend_yield}
              dividendHistory={company.dividend_history}
              profit={company.profit} 
              totalRevenue={company.total_revenue} 
              totalAssets={company.total_assets} 
              totalLiabilities={company.total_liabilities}
              onClick={CompanyContainer.handleShow}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default Dashboard;