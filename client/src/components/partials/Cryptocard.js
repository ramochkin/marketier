import React from 'react';

function CryptoCard(props){
    return (
        <div className='cardMargin'>
            <header>props.crypto.symbol</header>
            <ul>
                <li>
                    <div>
                        <div className='flexRow'>
                            <a>Price: </a>
                            <span>${props.crypto.price}</span>
                        </div>
                        <div className='flexRow'>
                            <a>Change: </a>
                            <span>${props.crypto.change}</span>
                        </div>
                        <div className='flexRow'>
                            <a>Change %: </a>
                            <span> {props.crypto.changesPercentage.toFixed(2)}%</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CryptoCard;