import React from 'react';
import CompanyContainer from '../Company-Container/CompanyContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

function Dashboard({ companies }) {
  return (
    <Col>
      <h1 className="text-center my-4">Dashboard</h1>
      <Row className="row-cols-1 row-cols-md-2 g-4 mx-1">
        {companies.map((company, index) => (
          <Col key={index}>
            <CompanyContainer 
              companyName={company.companyName} 
              intrinsicValue={company.intrinsicValue} 
              priceEarningsRatio={company.priceEarningsRatio}
              onClick={CompanyContainer.handleShow}
            />
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default Dashboard;
