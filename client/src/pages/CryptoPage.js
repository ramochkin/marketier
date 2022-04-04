import React, { useEffect } from 'react';
import CryptoCard from "../components/partials/CryptoCard";

function CryptoPage () {
    // const [crypto, setCrypto] = useState(null);
    // useEffect(() => {
    //     fetch('https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=430e3d658d7945141a85b4b5f2a6b7da')
    //         .then(res => res.json())
    //         .then(function (data){
    //             console.log(data)
    //             setCrypto(data.splice(0,5))
    //         });
    // }, []); 

    // const allCrypto = 
    //     crypto &&
    //     crypto.map((crypto) => {
    //         return <CryptoCard key={crypto.title} crypto={crypto} />
    //     })

    return (
        <div>
            <header>
                <h2>Cryptocurrency Prices</h2>
            </header>
            <div className= 'flexRow'>
                <div className='flexRow'>
                    {/* {allCrypto} */}
                </div>
            </div>
        </div>
    );
}

export default CryptoPage;