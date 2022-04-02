import React, { useEffect, useState } from 'react';


export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                console.log(data)
                setSearchData(data)
            })
    }, []);

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
        <div>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
        </div>
    );

};