import React, { useState, useEffect } from 'react';

import CryptoCard from "../components/partials/CryptoCard";

import "../css/GainerAndLoser.css"


function CryptoPage() {
    const [cryptos, setCryptos] = useState(null);

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setCryptos(data.splice(0, 5))
            });

    }, []);

    const allCryptos =
        cryptos &&
        cryptos.map((stock) => {
            return <CryptoCard key={stock.title} stock={stock} />

        })

    return (

        <div>
            <header>
                <h2>Crypto Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow cryptoText'>
                    {allCryptos}
                </div>

            </div>

        </div>
    )
}

export default CryptoPage;
