import React from 'react';

function CurrenciesCard(props) {
    return (
        <div className='cardMargin cryptoColor' >
            <header>{props.stock.name}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Ticker :</a>
                                <span> {props.stock.ticker}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Changes</a>
                                <span>  {props.stock.changes.toFixed(4)} %</span>
                            </div>
                            <div className='flexRow'>
                                <a>Open :</a>
                                <span> $ {props.stock.open}</span>
                            </div>
                            <div className='flexRow'>
                                <a>High :</a>
                                <span> $ {props.stock.high}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Low :</a>
                                <span> $ {props.stock.low}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}







export default CurrenciesCard;