import React from 'react';
import { CompanyUploadForm } from '../newCompanyForm/companyUploadForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export function InformationUpload({ addCompany }) {
    return (
        <div >
            <h1 className="text-center my-4">Information Upload</h1>
            <CompanyUploadForm addCompany={addCompany}/>
        </div>
    );
}

export default InformationUpload;
