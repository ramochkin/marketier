import React, { useState, useEffect } from 'react';

import SymbolCard from "../components/partials/SymbolCard";

import LineChart from "../components/partials/LineChart";
import "../css/GainerAndLoser.css"

function SymbolPage() {
    const [symbols, setSymbols] = useState(null);
    const [lineCharts, setLineCharts] = useState(null);

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)

            });
        fetch('https://financialmodelingprep.com/api/v3/historical-chart/30min/AAPL?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                // console.log(data)

            });

    }, []);

    const allSymbols =
        symbols &&
        symbols.map((symbols) => {
            return <SymbolCard key={symbols.symbol} symbols={symbols} />

        })
    const allLineCharts =
        lineCharts &&
        lineCharts.map((chartsData) => {
            return <LineChart key={chartsData.close} chartsData={chartsData} />

        })

    return (

        <div>
            <header>
                <h2 className="headerTitle">Symbol Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow StockText'>
                    {allSymbols}
                </div>
                <div className='flexColumn'>
                    <LineChart data={symbols} />
                </div>

            </div>

        </div>
    )
}
export default SymbolPage;