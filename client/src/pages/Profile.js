import React from "react"
import { Container, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ME } from "../utils/query"
import { REMOVE_PORTFOLIO, REMOVE_WATCHLIST } from "../utils/mutations"
import auth from "../utils/auth"
import { removePortfolioId, removeWatchlistId } from "../utils/localStorage"

export default function Profile() {

    const { loading, data } = useQuery(QUERY_ME)
    const [removePortfolio] = useMutation(REMOVE_PORTFOLIO)
    const [removeWatchlist] = useMutation(REMOVE_WATCHLIST)

    const userData = data?.me || {};

    const handleDeletePortfolio = async (_id) => {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removePortfolio({
                variables: { _id }
            });

            console.log(data)

        } catch (err) {
            console.error(err);
        }
    }

    const handleDeleteWatchlist = async (_id) => {
        const token = auth.loggedIn() ? auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            console.log(_id)
            const { data } = await removeWatchlist({
                variables: { _id }
            });

            console.log(data)

        } catch (err) {
            console.error(err);
        }
    }


    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            <Container>
                <h1>Welcome Home {userData.name}!</h1>
                <h2>
                    Your portfolio missed you.
                </h2>
            </Container>
            {userData.portfolio?.map((portfolio) => {
                return (
                    <Card border="dark">
                        <Card.Header as="h5">{portfolio.symbol}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                You own {portfolio.quantity} shares of {portfolio.symbol}, purchased at an average price of {portfolio.purchasePrice}
                            </Card.Text>
                            <Button className='btn-block btn-danger' onClick={() => handleDeletePortfolio(portfolio._id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                )
            })}
            <Container>
                <h2>
                    Here's what youre watching!
                </h2>
            </Container>
            {userData.watchlist?.map((watchlist) => {
                return (
                    <Card border="dark">
                        <Card.Body>
                            <Card.Text>
                               {watchlist.symbol}
                            </Card.Text>
                            <Button className='btn-block btn-danger' onClick={()=> handleDeleteWatchlist(watchlist._id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </>
    )

}