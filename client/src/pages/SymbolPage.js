import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import SymbolCard from "../components/partials/SymbolCard";
import LineChart from "../components/partials/LineChart";
import "../css/GainerAndLoser.css"

export default function SymbolPage() {
    const { symbol } = useParams();

    const [symbolDetails, setSymbolDetails] = useState(null)
    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=430e3d658d7945141a85b4b5f2a6b7da`)
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setSymbolDetails(data)
                console.log(symbolDetails)
            });
        fetch(`https://financialmodelingprep.com/api/v3/historical-chart/30min/${symbol}?apikey=430e3d658d7945141a85b4b5f2a6b7da`)
            .then(response => response.json())
            .then(function (data) {
                // console.log(data)

            });
    }, [])

    //TODO: Define symbols line 40 and allSymbols line 37

    return (

        <div>
            <header>
                <h2 className="headerTitle">Symbol Data</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow StockText'>
                    <SymbolCard/>
                </div>
                <div className='flexColumn'>
                    <LineChart data={symbols} />
                </div>

            </div>

        </div>
    )
}
