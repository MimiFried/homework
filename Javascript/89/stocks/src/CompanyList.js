import React, { useState, useEffect } from 'react';

const CompanyList = (({handleCompanySelected}) => {
    const [companyList, setCompanyList] = useState([]);

    useEffect( () => {
        (async () => {
    try{
        const response = await fetch('https://api-v2.intrinio.com/companies?has_stock_prices=true&api_key=OjdhYmIxMzQ4NWMzYTM1MjUyYTAwYmYwYWM2NjgzNTRk');
        if (! response.ok){
            throw new Error(`${response.statusCode}`);
        }
        let companyInfo = await response.json();
        let companyList = companyInfo.companies;
        setCompanyList(companyList);        
    } catch(err){
        console.log(err);
    }
    })();
    }, [companyList]);

return (
    <div>
    {companyList.map(company => <div id='listedComp'key={company.id} onClick={() => handleCompanySelected(company)}>{company.name}</div>)}
    </div>
)

})
    export default CompanyList;