import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker'
import CurrenciesCard from "../components/partials/CurrenciesCard";
import BarChart from '../components/partials/BarChart';
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

    return (

        <div>
           {Currenciess && <Ticker>
                {({ index }) => (
                    <>
                        <h1>{Currenciess[index].ticker} : {Currenciess[index].changes.toFixed(4)}%, Open: {Currenciess[index].open}, High: {Currenciess[index].high}, Low: {Currenciess[index].low}  </h1>
                    </>
                )}
            </Ticker>}
            <header>
                <h2>Currencies Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow CurrenciesText'>
                    {allCurrenciess}
                </div>
                <div className='flexColumn'>
                   <BarChart data={Currenciess}/>
                </div>

            </div>

        </div>
    )
}

export default CurrenciesPage;
