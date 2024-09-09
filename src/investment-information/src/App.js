import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import InformationUpload from './components/InformationUpload/InformationUpload.js';
import HomePage from './components/HomePage/HomePage.js';
import CompanyModal from './components/CompanyModal/CompanyModal.js';

function App() {
  const [companies, setCompanies] = useState([]);

  const addCompany = (company) => {
      setCompanies([...companies, company]);
  };

  const updateCompany = (company) => { 
    const updatedCompanies = companies.map((c) => {
      if (c.id === company.id) {
        return company;
      }
      return c;
    });
    setCompanies(updatedCompanies);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard companies={companies}/>} />
        <Route path="/InformationUpload" element={<InformationUpload addCompany={addCompany}/>} />
        <Route path="/CompanyModal" element={<CompanyModal updateCompany={updateCompany}/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
