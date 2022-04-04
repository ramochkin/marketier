import React from 'react';

function CurrenciesCard(props) {
    return (
        <div className='cardMargin currencyColor' >
            <header>{props.currency.name}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Ticker :</a>
                                <span> {props.currency.ticker}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Changes</a>
                                <span>  {props.currency.changes.toFixed(4)} %</span>
                            </div>
                            <div className='flexRow'>
                                <a>Open :</a>
                                <span> $ {props.currency.open}</span>
                            </div>
                            <div className='flexRow'>
                                <a>High :</a>
                                <span> $ {props.currency.high}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Low :</a>
                                <span> $ {props.currency.low}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}







export default CurrenciesCard;