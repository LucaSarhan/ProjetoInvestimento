import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function CompanyUploadForm({ addCompany }) {
    const [formData, setFormData] = useState({
        companyName: '',
        intrinsicValue: '',
        priceEarningsRatio: '',
        dividendYield: '',
        dividendHistory: '',
        profit: '',
        totalRevenue: '',
        totalAssets: '',
        totalLiabilities: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:5000/api/company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Company data saved successfully');
            setFormData({
                companyName: '',
                intrinsicValue: '',
                priceEarningsRatio: '',
                dividendYield: '',
                dividendHistory: '',
                profit: '',
                totalRevenue: '',
                totalAssets: '',
                totalLiabilities: '',
            });
        } else {
            alert('Failed to save company data');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
    }
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
                <Row>
                    <Form.Group controlId="dividendYield">
                        <Form.Label>Dividend Yield:</Form.Label>
                        <Form.Control
                            name="dividendYield"
                            value={formData.dividendYield}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="dividendHistory">
                        <Form.Label>Dividend History:</Form.Label>
                        <Form.Control
                            name="dividendHistory"
                            value={formData.dividendHistory}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="profit">
                        <Form.Label>Profit:</Form.Label>
                        <Form.Control
                            name="profit"
                            value={formData.profit}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="totalRevenue">
                        <Form.Label>Total Revenue:</Form.Label>
                        <Form.Control
                            name="totalRevenue"
                            value={formData.totalRevenue}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="totalAssets">
                        <Form.Label>Total Assets:</Form.Label>
                        <Form.Control
                            name="totalAssets"
                            value={formData.totalAssets}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="totalLiabilities">
                        <Form.Label>Total Liabilities:</Form.Label>
                        <Form.Control
                            name="totalLiabilities"
                            value={formData.totalLiabilities}
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