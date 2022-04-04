import React, { useState, useEffect } from 'react';

import CurrenciesCard from "../components/partials/CurrenciesCard";
import CurBarChart from '../components/partials/CurBarChart';
import Ticker from 'react-ticker'
import "../css/GainerAndLoser.css"


function CurrenciesPage() {
    const [Currenciess, setCurrenciess] = useState(null);

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/fx?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setCurrenciess(data.splice(0, 10))
            });

    }, []);

    const allCurrenciess =
        Currenciess &&
        Currenciess.map((currency) => {
            return <CurrenciesCard key={currency.title} currency={currency} />

        })
        const tickerData =
        Currenciess &&
        Currenciess.map((currencies) => {
            return `${currencies.ticker} : ${currencies.changes.toFixed(4)}% `
        })


    return (

        <div>
            {Currenciess && <Ticker>
            {({}) => (
                tickerData.join("   |   ")
            )}
            </Ticker>}

        
            <header>
                <h2 className= "headerTitle">Currencies Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow CurrenciesText'>
                    {allCurrenciess}
                </div>
                <div className='flexColumn'>
                   <CurBarChart data={Currenciess}/>
                </div>

            </div>

        </div>
    )
}

export default CurrenciesPage;
