import React from 'react';

function GainerCard(props) {
    return (
        <div className='cardMargin gainerColor' >
            <header>{props.stock.symbol}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Price</a>
                                <span> ${props.stock.price}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Change</a>
                                <span> ${props.stock.change}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Changes %</a>
                                <span> {props.stock.changesPercentage.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}







export default GainerCard;