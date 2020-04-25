import gql from 'graphql-tag';

const GET_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`;

const GET_SONG = gql`
  query GetSong ($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`;

export {
    GET_SONGS, GET_SONG
  };