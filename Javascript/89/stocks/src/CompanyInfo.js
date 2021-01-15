import React, { useState, useEffect } from 'react';
import Stocks from './Stocks';


const CompanyInfo = (({company}) => {
    const [companyInfo, setCompanyInfo] = useState([]);

    useEffect( () => {
        (async () => {
    try{
        const response = await fetch(`https://api-v2.intrinio.com/companies/${company.ticker}?api_key=OjdhYmIxMzQ4NWMzYTM1MjUyYTAwYmYwYWM2NjgzNTRk`);
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        let companyInfo = await response.json();
        setCompanyInfo(companyInfo);      
        console.log(companyInfo);
    } catch(err){
        console.log(err);
    }
    })();
    }, [company]);

return (
   <div className="companyElem" >
            <div id="name">{company.name}</div>
            <div id="ticker">{company.ticker}</div>
            <div id="desc">{companyInfo.short_description}</div>
    <Stocks company={company}/>
    </div>
)
})
    export default CompanyInfo;