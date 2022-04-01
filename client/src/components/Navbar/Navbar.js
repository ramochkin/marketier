import React, { useState, useEffect } from 'react'
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
                    <li className="leftLink">News</li>
                    <li className="leftLink">Stocks</li>
                    <li className="leftLink">Currencies</li>
                    <li className="leftLink">Cryptocurrencies</li>
                </ul>
            )}

            <button onClick={toggleNav} className="btn">▼</button>
        </nav>
    )
}