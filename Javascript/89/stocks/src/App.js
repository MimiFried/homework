import './App.css';
import {useState} from 'react';
import CompanyList from './CompanyList';
import CompanyInfo from './CompanyInfo';

function App() {
  const [selectedCompany, setSelectedCompany] = useState();

  return (
    <>
      <header> <h1 id='stocksTitle'>Stocks App</h1>
      </header>
      <div id='sideBar'>
        <CompanyList handleCompanySelected={setSelectedCompany} />
      </div>

      <div id='main'>
      {selectedCompany && <CompanyInfo company={selectedCompany} />}
      </div>
    </>
  );
}

export default App;
