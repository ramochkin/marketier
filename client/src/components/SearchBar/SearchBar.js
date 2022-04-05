import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar() {

    const data = [
        {
            symbol: "AAPL"
        },
        {
            symbol: "AMZN"
        },
        {
            symbol: "AAL"
        },
        {
            symbol: "ABC"
        },

    ]

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [ticker, setTicker] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.symbol.toUpperCase().includes(searchWord.toUpperCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    function checkVal(data){
        window.location.replace(`/symbol/${data}`)
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Search"
                    value={wordEntered}
                    name="wordEntered"
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <p value={value.symbol} onClick={()=> {
                                checkVal(value.symbol)
                               
                            }}>{value.symbol}</p>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;