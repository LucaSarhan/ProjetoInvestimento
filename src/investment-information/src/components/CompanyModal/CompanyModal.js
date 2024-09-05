import React, { useState } from 'react';
import { Modal, Button, ListGroup, Form } from 'react-bootstrap';

export function CompanyModal({
  showModal,
  handleClose,
  companyName,
  intrinsicValue,
  priceEarningsRatio,
  dividendYield,
  dividendHistory,
  profit,
  totalRevenue,
  totalAssets,
  totalLiabilities,
  onSave, // Function to save the updated data
}) {
  const [isEditMode, setIsEditMode] = useState(false); // Track if we are in edit mode
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData); // Pass updated data to the parent component
    setIsEditMode(false); // Exit edit mode
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? 'Edit Company Metrics' : `${companyName} - Metrics`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {isEditMode ? (
            <>
              {/* Company Name input field when in edit mode */}
              <ListGroup.Item>
                <strong>Company Name:</strong>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </ListGroup.Item>
              {/* Replace static values with form inputs when in edit mode */}
              <ListGroup.Item>
                <strong>Intrinsic Value:</strong>
                <Form.Control
                  type="number"
                  name="intrinsicValue"
                  value={formData.intrinsicValue}
                  onChange={handleInputChange}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Price to Earnings Ratio:</strong>
                <Form.Control
                  type="number"
                  name="priceEarningsRatio"
                  value={formData.priceEarningsRatio}
                  onChange={handleInputChange}
                />
              </ListGroup.Item>
              {/* Repeat for all other fields */}
            </>
          ) : (
            <>
              {/* Static display when not in edit mode */}
              <ListGroup.Item><strong>Company Name:</strong> {companyName}</ListGroup.Item>
              <ListGroup.Item><strong>Intrinsic Value:</strong> {intrinsicValue}</ListGroup.Item>
              <ListGroup.Item><strong>Price to Earnings Ratio:</strong> {priceEarningsRatio}</ListGroup.Item>
              {/* Repeat for all other fields */}
            </>
          )}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        {isEditMode ? (
          <>
            <Button variant="secondary" onClick={() => setIsEditMode(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => setIsEditMode(true)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => {/* Delete logic here */}}>
              Delete
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default CompanyModal;