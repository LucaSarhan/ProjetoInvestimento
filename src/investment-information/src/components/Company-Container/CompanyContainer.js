import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

function normalizeCompanyName(name) {
  return name
      .normalize('NFD') // Normalize to decompose combined letters into separate letters and diacritical marks
      .replace(/[\u0300-\u036f]/g, '') // Remove all diacritical marks
      .toLowerCase(); // Then convert to lowercase
}

export function CompanyContainer({ companyName, intrinsicValue, priceEarningsRatio, additionalInfo }) {
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
          <Modal.Title>{companyName} - More Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
          <ListGroup.Item><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
          <ListGroup.Item><strong>Divend Payout:</strong> {additionalInfo}</ListGroup.Item>
          <ListGroup.Item><strong>Profit:</strong> {additionalInfo}</ListGroup.Item>
          <ListGroup.Item><strong>Total Revenue:</strong> {additionalInfo}</ListGroup.Item>
          <ListGroup.Item><strong>Total Assets:</strong> {additionalInfo}</ListGroup.Item>
          <ListGroup.Item><strong>Total Liabilities:</strong> {additionalInfo}</ListGroup.Item>
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
