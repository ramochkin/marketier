import React from 'react';

function CryptoCard(props) {
    return (
        <div className='cardMargin cryptoColor' >
            <header>{props.crypto.name}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Price :</a>
                                <span> ${props.crypto.price}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Day High :</a>
                                <span> $ {props.crypto.dayHigh}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Day Low :</a>
                                <span> $ {props.crypto.dayLow}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Year High :</a>
                                <span> $ {props.crypto.yearHigh}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Year Low :</a>
                                <span> $ {props.crypto.yearLow}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}







export default CryptoCard;