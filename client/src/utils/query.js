import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query me {
    me {
      _id
      name
      email
      watchlist {
        _id
        symbol
      }
      portfolio {
        _id
        symbol
        quantity
        purchasePrice
      }
    }
  }
`