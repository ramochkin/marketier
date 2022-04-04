import Reach from 'react';

function SymbolCard(props) {
    return (
        <div className='cardMargin loserColor' >
            <header>{props.stock.symbol}</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Date: </a>
                                <span> ${props.symbols.date}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Open: </a>
                                <span> ${props.symbols.open.toFixed(2)}</span>
                            </div>
                            <div className='flexRow'>
                                <a>Close: </a>
                                <span> {props.symbols.close.toFixed(2)}%</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    );
}







export default SymbolCard;