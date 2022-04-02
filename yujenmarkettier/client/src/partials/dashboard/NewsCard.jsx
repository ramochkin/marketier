import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

function NewsCard(props) {
    return (
        <div className='cardMargin newsCard' >
            <header>{props.stock.symbol} News</header>
            <ul>
                {/* Item */}
                <li>
                    <div>
                        <div>
                            <div className='flexRow'>
                                <a>Date :</a>
                                <span> {props.stock.publishedDate}</span>
                            </div>
                            <div className='flexRow'>
                                <h2> {props.stock.title}</h2>
                            </div>
                            <br></br>
                            
                            <div className='flexRow'>
                                <img className="PWImg" src={props.stock.image} />
                            </div>
                            <br></br>
                            <div className='flexRow'>
                                <span> {props.stock.text}</span>
                            </div>
                            <br></br>
                            <div className='flexRow'>
                                <a>News URL :</a>
                                <a href={props.stock.url}> {props.stock.url} </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >

    );
}



export default NewsCard;