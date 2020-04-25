import gql from 'graphql-tag';  // used to write GraphQL queries

const GET_USER = gql`
  {
    user {
      id
      email
    }
  }
`;

export {
  GET_USER
};