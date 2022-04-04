import React from 'react';

function SymbolsCard(props) {
    return (
        <div className='cardMargin newsCard' >
            <header>{props.symbols.symbol} Symbols</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Name :</a>
                                <span> {props.symbols.name}</span>
                            </div>
                            <div className='flexRow'>
                                <a>symbol :</a>
                                <span> {props.symbols.symbol}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Sector :</a>
                                <span> {props.symbols.sector}</span>
                            </div>
                            <div className='flexRow'>
                            <a>Price :</a>
                                <h2> {props.symbols.price}</h2>
                            </div>
                            <div className='flexRow'>
                            <a>Market Cap :</a>
                                <h2> {props.symbols.mktcap}</h2>
                            </div>
                            <div className='flexRow'>
                            <a>Vol Average :</a>
                                <h2> {props.symbols.volAvg}</h2>
                            </div>
                            <br></br>
                            
                            <div className='flexRow'>
                                <img className="PWImg" src={props.symbols.image} />
                            </div>
                            <br></br>
                            <div className='flexRow'>
                                <span> {props.symbols.description}</span>
                            </div>
                            <br></br>
                            <div className='flexRow'>
                                <a>Symbols URL :</a>
                                <a href={props.symbols.url}> {props.symbols.url} </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}



export default SymbolsCard;