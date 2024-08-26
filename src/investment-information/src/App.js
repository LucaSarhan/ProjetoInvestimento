import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import InformationUpload from './components/Information-Upload/InformationUpload';

function App() {
  const [companies, setCompanies] = useState([]);

  const addCompany = (company) => {
      setCompanies([...companies, company]);
  };

  return (
    <div className="App">
      <InformationUpload addCompany={addCompany}/>
      <Dashboard companies={companies}/>
    </div>
  );
}

export default App;
