import React, { useEffect, useState } from 'react';

export default function StockPage() {
    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/sp500_constituent?apikey=430e3d658d7945141a85b4b5f2a6b7da')
        .then(data => data.json())
        .then((data) => {
            const newData = data.map((data) => data.symbol);
            setSearchData(newData)
        });
    })

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        searchData.filter((input) => {
            return input.symbol.match(searchInput);
        });
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                    name="searchInput" />
            </div>


        </>)
}