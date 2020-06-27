import { gql } from 'apollo-boost';

export const GET_TODO_BEFORE = gql`
  {
    todoBefore @client
  }
`;
