import React from 'react';

function CryptoCard(props) {
    return (
        <div className='cardMargin cryptoColor' >
            <header>{props.stock.name}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Price :</a>
                                <span> ${props.stock.price}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Day High :</a>
                                <span> $ {props.stock.dayHigh}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Day Low :</a>
                                <span> $ {props.stock.dayLow}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Year High :</a>
                                <span> $ {props.stock.yearHigh}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Year Low :</a>
                                <span> $ {props.stock.yearLow}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}







export default CryptoCard;