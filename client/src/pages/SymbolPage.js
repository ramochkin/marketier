import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

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
    }, [])

   

    return (
        <>
            
            
        </>
    )
}