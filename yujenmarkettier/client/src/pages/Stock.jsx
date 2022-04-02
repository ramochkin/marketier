import React, { useState, useEffect } from 'react';

import GainerCard from "../partials/dashboard/GainerCard";
import LoserCard from "../partials/dashboard/LoserCard";
import NewsCard from "../partials/dashboard/NewsCard";

import "../css/GainerAndLoser.css"


function Stock() {
    const [gainers, setGainers] = useState(null);
    const [losers, setLosers] = useState(null);
    const [news, setNews] = useState(null);
    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setGainers(data.splice(0, 5))
            });
        fetch('https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setLosers(data.splice(0, 5))
            });
        fetch('https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&page=0&apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setNews(data.splice(0, 5))
            });
    }, []);

    const allGainers =
        gainers &&
        gainers.map((stock) => {
            return <GainerCard key={stock.symbol} stock={stock} />

        })
    const allLosers =
        losers &&
        losers.map((stock) => {
            return <LoserCard key={stock.symbol} stock={stock} />

        })
    const allNews =
        news &&
        news.map((stock) => {
            return <NewsCard key={stock.title} stock={stock} />

        })

    return (

        <div>
            <header>
                <h2>Top Gainers / Losers</h2>
            </header>
            <div className='flexRow'>
                <div className='flexRow'>
                    {allGainers}
                </div>
                <div className='flexRow'>
                    {allLosers}
                </div>
            </div>
            <div className='flexRow'>
                {allNews}
            </div>
        </div>
    )
}

export default Stock;