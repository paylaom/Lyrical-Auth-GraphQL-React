import gql from 'graphql-tag';

const ADD_SONG = gql`
  mutation AddSong($title: String!){
    addSong(title: $title) {
      id
    }
  }
`;

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!){
    deleteSong(id: $id) {
      id
    }
  }
`;

export {
  ADD_SONG, DELETE_SONG
};