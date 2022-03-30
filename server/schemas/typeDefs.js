const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    watchlist: [Watchlist]
    portfolio: [Portfolio]
}

type Portfolio {
    _id: ID!
    symbol: String!
    quantity: Int!
    purchasePrice: Float
}

type Watchlist {
    _id: ID!
    symbol: String!
}

type Auth {
    token: ID!
    user: User
}

input WatchlistInput {
    symbol: String!
}

input PortfolioInput {
    symbol: String!
    quantity: Int!
    purchasePrice: Float
}

type Query {
    me: User
}

type Mutation {
    login( email: String!, password: String! ): Auth
    addUser( name: String!, email: String!, password: String!): Auth
    addWatchlist( symbol: WatchlistInput!): User
    removeWatchlist( symbolId: ID!): User
    addPortfolio( portfolioData: PortfolioInput!): User
    removePortfolio( portfolioId: ID!): User
}
`

module.exports = typeDefs