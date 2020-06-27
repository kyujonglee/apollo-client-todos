const { gql } = require("apollo-boost");

export const GET_COUNT = gql`
  {
    count @client
  }
`;

export const PLUS_COUNT = gql`
    mutation plusCount {
        plusCount @client
    }
`;

export const MINUS_COUNT = gql`
    mutation minusCount {
        minusCount @client
    }
`;