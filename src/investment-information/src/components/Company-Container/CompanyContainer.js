import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

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

  return (
    <>
      <Card onClick={handleShow} className="container-fluid p-0" >
        <Card.Body className="shadow text-center bg-secondary rounded"> 
          <Card.Title className="mb-3">{companyName}</Card.Title>
          <Card.Text>
            <ListGroup.Item><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
            <ListGroup.Item><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{companyName} - Metrics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
          <ListGroup.Item><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
          <ListGroup.Item><strong>Dividend Yield:</strong> {dividendYield}</ListGroup.Item>
          <ListGroup.Item><strong>Dividend History:</strong> {dividendHistory}</ListGroup.Item>
          <ListGroup.Item><strong>Profit:</strong> {profit}</ListGroup.Item>
          <ListGroup.Item><strong>Total Revenue:</strong> {totalRevenue}</ListGroup.Item>
          <ListGroup.Item><strong>Total Assets:</strong> {totalAssets}</ListGroup.Item>
          <ListGroup.Item><strong>Total Liabilities:</strong> {totalLiabilities}</ListGroup.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {/*Edit logic here*/}}>
            Edit
          </Button>
          <Button variant="primary" onClick={() => {/*Delete logic here*/}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompanyContainer;