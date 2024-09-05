import React, { useEffect, useState } from 'react';
import CompanyContainer from '../CompanyContainer/CompanyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function Dashboard() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/companies');
        const data = await response.json();
        console.log(data);  // Add this line to see the data fetched
        setCompanies(data);
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
        {companies.map((company, index) => (
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