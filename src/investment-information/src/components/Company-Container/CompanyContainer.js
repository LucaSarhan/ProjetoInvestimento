import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from 'react-bootstrap';

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
          <p id={`${normalizedCompanyName}IV`}><strong>Intrinsic Value:</strong> {intrinsicValue}</p>
          <p id={`${normalizedCompanyName}PE`}><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</p>
        </Card.Text>
      </Card.Body>
    </Card>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{companyName} - More Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Intrinsic Value:</strong> {intrinsicValue}</p>
          <p><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</p>
          <p><strong>Additional Info:</strong> {additionalInfo}</p>
          {/* Add more information or components as needed */}
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
