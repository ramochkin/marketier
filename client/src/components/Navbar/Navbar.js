import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="navbarLinks">
                    <li className="leftLink" ><Link to="/">Home</Link></li>
                    <li className="leftLink" ><Link to="/news">News</Link></li>
                    <li className="leftLink"><Link to="/stocks">Stocks</Link></li>
                    <li className="leftLink"><Link to="/currencies">Currencies</Link></li>
                    <li className="leftLink"><Link to="/crypto">Cryptocurrencies</Link></li>

                </ul>
            )}

            <button onClick={toggleNav} className="btn">▼</button>
        </nav>
    )
}