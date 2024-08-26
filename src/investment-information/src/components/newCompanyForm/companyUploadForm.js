import React, { useState } from 'react';
import './companyUploadForm.css';

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
        <div>
            <form onSubmit={handleSubmit} className='info-upload-form-container'>
                <label htmlFor="companyName">Company Name: </label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                />
                <label htmlFor="intrinsicValue"> Intrinsic Value: </label>
                <input
                    type="number"
                    id="intrinsicValue"
                    name="intrinsicValue"
                    value={formData.intrinsicValue}
                    onChange={handleChange}
                />
                <label htmlFor="priceEarningsRatio"> Price to Earnings Ratio: </label>
                <input
                    type="number"
                    id="priceEarningsRatio"
                    name="priceEarningsRatio"
                    value={formData.priceEarningsRatio}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CompanyUploadForm;