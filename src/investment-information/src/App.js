import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import InformationUpload from './components/Information-Upload/InformationUpload';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [companies, setCompanies] = useState([]);

  const addCompany = (company) => {
      setCompanies([...companies, company]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard companies={companies}/>} />
        <Route path="/InformationUpload" element={<InformationUpload addCompany={addCompany}/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
