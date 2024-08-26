import React from 'react';
import { CompanyUploadForm } from '../newCompanyForm/companyUploadForm';

export function InformationUpload({ addCompany }) {
    return (
        <div>
            <h1>Information Upload</h1>
            <CompanyUploadForm addCompany={addCompany}/>
        </div>
    );
}

export default InformationUpload;
