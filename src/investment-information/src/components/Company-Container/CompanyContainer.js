import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

function normalizeCompanyName(name) {
  return name
      .normalize('NFD') // Normalize to decompose combined letters into separate letters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // Remove all diacritical marks
      .toLowerCase(); // Then convert to lowercase
}

export function CompanyContainer({ 
    companyName, 
    intrinsicValue, 
    priceEarningsRatio, 
    dividendYield,
    dividendHistory,
    profit, 
    totalRevenue, 
    totalAssets, 
    totalLiabilities 
  }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const normalizedCompanyName = normalizeCompanyName(companyName);

  return (
    <>
    <Card onClick={handleShow} className="container-fluid p-0" >
      <Card.Body className="shadow text-center bg-secondary rounded"> 
        <Card.Title className="mb-3">{companyName}</Card.Title>
        <Card.Text>
          <ListGroup.Item id={`${normalizedCompanyName}IV`}><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}PE`}><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
        </Card.Text>
      </Card.Body>
    </Card>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{companyName} - Metrics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item id={`${normalizedCompanyName}IV`}><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}PE`}><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}DY`}><strong>Divend Yield:</strong> {dividendYield}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}DH`}><strong>Dividend History:</strong> {dividendHistory}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}P`}><strong>Profit:</strong> {profit}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}TR`}><strong>Total Revenue:</strong> {totalRevenue}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}TA`}><strong>Total Assets:</strong> {totalAssets}</ListGroup.Item>
          <ListGroup.Item id={`${normalizedCompanyName}TL`}><strong>Total Liabilities:</strong> {totalLiabilities}</ListGroup.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() =>{/*Edit logic here*/}}>
            Edit
          </Button>
          <Button variant="primary" onClick={() =>{/*Delete logic here*/}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default CompanyContainer;
