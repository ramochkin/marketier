import React, { useState, useEffect } from 'react';

import NewsCard from "../components/partials/NewsCard";

import "../css/GainerAndLoser.css"


function NewsPage() {
    const [news, setNews] = useState(null);
    useEffect(() => {
        fetch('https://financialmodelingprep.com//api/v3/stock_news?limit=50&apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setNews(data.splice(0, 10))
            });
    }, []);


    const allNews =
        news &&
        news.map((stock) => {
            return <NewsCard key={stock.title} stock={stock} />

        })

    return (

        <div>
            <header>
                <h2 className= "headerTitle">Latest News</h2>
            </header>
  
            <div className='flexRow card-body'>
                {allNews}
            </div>
        </div>
    )
}

export default NewsPage;
