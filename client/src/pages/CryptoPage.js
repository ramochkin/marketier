import React, { useState, useEffect } from 'react';
import CryptoCard from "../components/partials/CryptoCard";
import BarChart from '../components/partials/BarChart';
import Ticker from 'react-ticker';
import "../css/GainerAndLoser.css";
import "../css/CryptoPage.css";



function CryptoPage() {
    const [cryptos, setCryptos] = useState(null);

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setCryptos(data.splice(0, 12))
            });

    }, []);

    const allCryptos =
        cryptos &&
        cryptos.map((crypto) => {
            return <CryptoCard key={crypto.title} crypto={crypto} />

        })


    return (

        <div>
            {cryptos && <Ticker>
                {({ index }) => (
                    <>
                        <h1 className="tickerBar">{cryptos[index].name} : {cryptos[index].price}   |</h1>
                    </>
                )}
            </Ticker>}
            <header>
                <h2 className="headerTitle">Crypto Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow CurrenciesText'>
                    {allCryptos}
                </div>
                <div>
                    <BarChart data={cryptos} />
                </div>
            </div>

        </div>
    )
}


export default CryptoPage;
