import React from 'react';
import { CompanyUploadForm } from '../newCompanyForm/companyUploadForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

export function InformationUpload({ addCompany }) {
    return (
        <Row style={{ width: '100%' }}>
            <h1 className="text-center my-4">Information Upload</h1>
            <CompanyUploadForm addCompany={addCompany}/>
        </Row>
    );
}

export default InformationUpload;