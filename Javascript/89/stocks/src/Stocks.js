import React, { useState, useEffect } from 'react';


const Stocks = (({company}) => {
    const [stockInfo, setStockInfo] = useState([]);

    useEffect( () => {
    (async () => {
        try{
            const response = await fetch(`https://api-v2.intrinio.com/securities/${company.ticker}/prices/realtime?api_key=OjdhYmIxMzQ4NWMzYTM1MjUyYTAwYmYwYWM2NjgzNTRk`);
            if (! response.ok){
                throw new Error(`${response.statusCode}`);
            }
            let stockInfo = await response.json();
            setStockInfo(stockInfo);    
            console.log(stockInfo);
        } catch(err){
            console.log(err);
        }
        })();
    });

return (
        <div id="stocks">
            <div>Price: {stockInfo.last_price}</div>
            <div>Last Updated: {stockInfo.last_time}</div>
        </div>
)
})
    export default Stocks;