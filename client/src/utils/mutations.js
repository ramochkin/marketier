import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`

export const ADD_WATCHLIST = gql`
mutation AddWatchlist($symbol: WatchlistInput!) {
    addWatchlist(symbol: $symbol) {
      name
      email
      _id
      watchlist {
        _id
        symbol
      }
    }
  }
`

export const REMOVE_WATCHLIST = gql`
mutation RemoveWatchlist($symbolId: ID!) {
    removeWatchlist(symbolId: $symbolId) {
      _id
      name
      email
      watchlist {
        _id
        symbol
      }
    }
  }
`

export const ADD_PORTFOLIO = gql`
mutation AddPortfolio($portfolioData: PortfolioInput!) {
    addPortfolio(portfolioData: $portfolioData) {
      _id
      name
      email
      portfolio {
        _id
        symbol
        quantity
        purchasePrice
      }
    }
  }
`

export const REMOVE_PORTFOLIO = gql`
mutation RemovePortfolio($portfolioId: ID!) {
    removePortfolio(portfolioId: $portfolioId) {
      _id
      name
      email
      portfolio {
        _id
        symbol
        quantity
        purchasePrice
      }
    }
  }
`