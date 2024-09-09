import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import CompanyModal from '../CompanyModal/CompanyModal.js';

export function CompanyContainer({
  companyName,
  intrinsicValue,
  priceEarningsRatio,
  dividendYield,
  dividendHistory,
  profit,
  totalRevenue,
  totalAssets,
  totalLiabilities,
}) {
  const [companyData, setCompanyData] = useState({
    companyName,
    intrinsicValue,
    priceEarningsRatio,
    dividendYield,
    dividendHistory,
    profit,
    totalRevenue,
    totalAssets,
    totalLiabilities,
  });

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSave = (updatedData) => {
    // Update the local state with the new data
    setCompanyData(updatedData);
    
    // You can then make a PATCH or PUT request to update the backend
    fetch(`/api/companies/${companyData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then((response) => response.json())
    .then((data) => console.log('Updated data:', data))
    .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <Card onClick={handleShow} className="container-fluid p-0">
        <Card.Body className="shadow text-center bg-secondary rounded">
          <Card.Title className="mb-3">{companyData.companyName}</Card.Title>
          <div>
            <ListGroup.Item><strong>Intrinsic Value:</strong> {companyData.intrinsicValue}</ListGroup.Item>
            <ListGroup.Item><strong>Price to Earnings Ratio:</strong> {companyData.priceEarningsRatio}</ListGroup.Item>
          </div>
        </Card.Body>
      </Card>

      <CompanyModal
        showModal={showModal}
        handleClose={handleClose}
        {...companyData} // Pass all the company data as props
        onSave={handleSave} // Pass the save handler
      />
    </>
  );
}

export default CompanyContainer;