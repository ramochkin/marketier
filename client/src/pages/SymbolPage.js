import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import SymbolCard from "../components/partials/SymbolCard";
import "../css/GainerAndLoser.css"
import LineChart from "../components/partials/LineChart";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import { ADD_WATCHLIST, ADD_PORTFOLIO } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import auth from '../utils/auth';
import { Modal, Form, Button } from 'react-bootstrap';
import { savePortfolioIds, saveWatchlistId } from '../utils/localStorage';

export default function SymbolPage() {
    const { symbol } = useParams();
    const [addPortfolio] = useMutation(ADD_PORTFOLIO);
    const [addWatchlist] = useMutation(ADD_WATCHLIST);

    const [userFormData, setUserFormData] = useState({ symbol: '', quantity: '', purchasePrice: '' });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [symbolDetails, setSymbolDetails] = useState({})
    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=430e3d658d7945141a85b4b5f2a6b7da`)
            .then(response => response.json())
            .then(function (data) {

                setSymbolDetails(data[0])
            });
        //     fetch(`https://financialmodelingprep.com/api/v3/historical-chart/30min/${symbol}?apikey=430e3d658d7945141a85b4b5f2a6b7da`)
        //         .then(response => response.json())
        //         .then(function (data) {
        //             // console.log(data)

        //         });
    }, [])

    console.log(symbolDetails)

    const handlePortfolioSave = async () => {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await addPortfolio({
                variables: { symbol: userFormData.symbol , quantity: parseInt(userFormData.quantity), purchasePrice: parseFloat(userFormData.purchasePrice) }
            })


        }
        catch (err) {
            console.log(err)
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };


    const handleWatchlistSave = async () => {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await addWatchlist({
                variables: { symbol: symbolDetails.symbol}
            })


        }
        catch (err) {
            console.log(err)
        }
    }

    return (

        <div>
            <header>
                <h2 className="headerTitle">{symbolDetails.symbol} ${symbolDetails.price} </h2>
                <div>
                    <button onClick={handleShow}> <AddIcon /></button>
                    <button onClick={handleWatchlistSave}> <FavoriteBorderIcon /></button>

                </div>
            </header>
            <div className='flexRow'>
                <div className='flexRow StockText'>
                    {/* {allSymbols} */}
                </div>
                <div className='flexColumn'>
                    {/* <LineChart data={symbols} /> */}
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add to your portfolio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor='symbol'>{symbolDetails.symbol}</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Symbol'
                                name='symbol'
                                onChange={handleInputChange}
                                value={userFormData.symbol}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Symbol is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='quantity'>How many shares do you own?</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Quantity'
                                name='quantity'
                                onChange={handleInputChange}
                                value={userFormData.quantity}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Amount owned is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='purchasePrice'>What was your purchase price?</Form.Label>
                            <Form.Control
                                type='number'
                                step='0.01'
                                placeholder='$'
                                name='purchasePrice'
                                onChange={handleInputChange}
                                value={userFormData.purchasePrice}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handlePortfolioSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
