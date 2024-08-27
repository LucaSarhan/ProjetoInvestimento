import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function CompanyUploadForm({ addCompany }) {
    const [formData, setFormData] = useState({
        companyName: '',
        intrinsicValue: '',
        priceEarningsRatio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        if (formData.companyName === '' || formData.intrinsicValue === '' || formData.priceEarningsRatio === '') {
            alert('Please fill all the fields');
            return;
        } 
        e.preventDefault();
        addCompany(formData);
        setFormData({ companyName: '', intrinsicValue: '', priceEarningsRatio: '' });
        console.log(formData);
    };

    return (
        <Container className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className="w-50">
                <Row>
                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="intrinsicValue">
                        <Form.Label>Intrinsic Value:</Form.Label>
                        <Form.Control
                            type="number"
                            name="intrinsicValue"
                            value={formData.intrinsicValue}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="priceEarningsRatio">
                        <Form.Label>Price to Earnings Ratio:</Form.Label>
                        <Form.Control
                            type="number"
                            name="priceEarningsRatio"
                            value={formData.priceEarningsRatio}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default CompanyUploadForm;