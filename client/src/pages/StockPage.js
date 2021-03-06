import React, { useState, useEffect } from 'react';
import BarChart from '../components/partials/BarChart';
import StockCard from "../components/partials/StockCard";
import Ticker from 'react-ticker'
import "../css/GainerAndLoser.css"


function StockPage() {
    const [stocks, setStocks] = useState(null);

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/quotes/index?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setStocks(data.splice(0, 20))
            });

    }, []);

    const allStocks =
        stocks &&
        stocks.map((stock) => {
            return <StockCard key={stock.symbol} stock={stock} />

        })
    const tickerData =
        stocks &&
        stocks.map((stock) => {
            return `${stock.symbol} : ${stock.price.toFixed(2)}`
        })


    return (

        <div>
            {stocks && <Ticker>
            {({}) => (
                tickerData.join("   |   ")
            )}
            </Ticker>}

            <header>
                <h2 className= "headerTitle">Stock Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow StockText'>
                    {allStocks}
                </div>
                <div className='flexColumn'>
                    <BarChart data={stocks} />
                </div>

            </div>

        </div>
    )
}

export default StockPage;


// export default function StockPage() {
//     const [searchInput, setSearchInput] = useState('');
//     const [searchData, setSearchData] = useState('');
//     const [stocks, setStocks] = useState('');

//     useEffect(() => {
//         fetch('https://financialmodelingprep.com/api/v3/sp500_constituent?apikey=430e3d658d7945141a85b4b5f2a6b7da')
//         .then(data => data.json())
//         .then((data) => {
//             const newData = data.map((data) => data.symbol);
//             setSearchData(newData)
//         });
//         fetch('https://financialmodelingprep.com/api/v3/quotes/index?apikey=430e3d658d7945141a85b4b5f2a6b7da')
//         .then(data => data.json())
//         .then((data)=> setStocks(data))
//     })

//     const handleChange = (e) => {
//         e.preventDefault();
//         setSearchInput(e.target.value);
//     };

//     if (searchInput.length > 0) {
//         searchData.filter((input) => {
//             return input.symbol.match(searchInput);
//         });
//     }

//     return (
//         <>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search here"
//                     onChange={handleChange}
//                     value={searchInput}
//                     name="searchInput" />
//             </div>


//         </>)
// }