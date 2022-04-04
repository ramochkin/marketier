import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


export default function SearchBar() {
    const items = [
        {
            id: 0,
            name: 'AAPL'
        },
        {
            id: 1,
            name: 'AMZN'
        },
        {
            id: 2,
            name: 'TSLA'
        },
        {
            id: 3,
            name: 'MSFT'
        },
        {
            id: 4,
            name: 'AAL'
        }
    ]

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
    
      const formatResult = (item) => {
        return (
          <>
           <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
          </>
        )
      }

    const [searchInput, setSearchInput] = useState('');
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        fetch('https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=430e3d658d7945141a85b4b5f2a6b7da')
            .then(response => response.json())
            .then(function (data) {
                // console.log(data)
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
        <div className="App">
            <header className="App-header">
                <div style={{ width: 300 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                    <button type="submit" onClick={()=>{}}> search </button>
                </div>
            </header>
        </div>
    );

};