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
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
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
mutation addWatchlist($symbol: String!) {
  addWatchlist(symbol: $symbol) {
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

export const REMOVE_WATCHLIST = gql`
mutation removeWatchlist($id: ID!) {
  removeWatchlist(_id: $id) {
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
mutation addPortfolio($symbol: String!, $quantity: Int!, $purchasePrice: Float!) {
  addPortfolio(symbol: $symbol, quantity: $quantity, purchasePrice: $purchasePrice) {
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
mutation removePortfolio($id: ID!) {
  removePortfolio(_id: $id) {
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