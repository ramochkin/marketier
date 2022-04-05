import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Modal, Tab, Nav, Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../LoginForm'
import SignUpForm from '../SignUpForm'
import auth from '../../utils/auth'
import SearchBar from '../SearchBar/SearchBar'
import Logo from '../../assets/image/marketier.png'

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showModal, setShowModal] = useState(false);


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
        <>
            <nav>

                {/* <Container> */}
                <Row className='d-flex justify-content-between'>
                    <Col className='NavflexRow'>
                        {/* <img src={Logo}></img> */}
                        <ul className="navbarLinks">
                            <li className="leftLink" ><Link to="/">Home</Link></li>
                            <li className="leftLink" ><Link to="/news">News</Link></li>
                            <li className="leftLink" ><Link to="/stocks">Stocks</Link></li>
                            <li className="leftLink" ><Link to="/currencies">Currencies</Link></li>
                            <li className="leftLink" ><Link to="/crypto">Cryptocurrencies</Link></li>

                        </ul>
                    </Col>
                    <Col >
                        <SearchBar />
                    </Col>
                    <Col>

                        <ul className="rightNavbarLinks">
                            {auth.loggedIn() ? (
                                <>
                                    <li className="rightLink" ><Link to="/profile">Profile</Link></li>
                                    <li className="rightLink" id="logOut" ><Link to='#' onClick={() => auth.logout()}>Log Out</Link></li>

                                </>
                            )
                                : (<li className="rightlink" ><Link to='#' onClick={() => setShowModal(true)}>Login/Sign Up</Link></li>)}
                        </ul>

                    </Col>

                </Row>
                {/* </Container> */}




                <button onClick={toggleNav} className="arrowbtn">▼</button>
            </nav >
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <Nav.Link eventKey='login'>Login</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='login'>
                                <LoginForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='signup'>
                                <SignUpForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    )
}