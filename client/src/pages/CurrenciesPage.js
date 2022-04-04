import React, { useState, useEffect } from 'react';

import CurrenciesCard from "../components/partials/CurrenciesCard";

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
        Currenciess.map((stock) => {
            return <CurrenciesCard key={stock.title} stock={stock} />

        })

    return (

        <div>
            <header>
                <h2>Currencies Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow CurrenciesText'>
                    {allCurrenciess}
                </div>
                <div className='flexColumn'>
                   {/* <BarChart data={stock}/> */}
                </div>

            </div>

        </div>
    )
}

export default CurrenciesPage;
