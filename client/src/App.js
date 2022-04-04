import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import UserPage from './pages/UserPage';
import StockPage from './pages/StockPage';
import SymbolPage from './pages/SymbolPage'
import CurrenciesPage from './pages/CurrenciesPage';
import CryptoPage from './pages/CryptoPage';
import Profile from './pages/Profile'



const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


function App() {

    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={<HomePage />}
              />
              <Route
                path='/news'
                element={<NewsPage />}
              />
              <Route
                path='/user'
                element={<UserPage />}
              />
              <Route
                path='/stocks'
                element={<StockPage />}
              />
              <Route
                path='/symbol/:symbol'
                element={<SymbolPage />}
              />
              <Route
                path='/currencies'
                element={<CurrenciesPage />}
              />
              <Route
                path='/crypto'
                element={<CryptoPage />}
              />
              <Route
                path='/profile'
                element={<Profile />}
              />
              <Route
                path='*'
                element={<h1 className='display-2'>Wrong page!</h1>}
              />
            </Routes>
          </>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;