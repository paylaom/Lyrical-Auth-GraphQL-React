import gql from 'graphql-tag';

const ADD_LYRIC = gql`
  mutation AddLyric($content: String!, $songId: ID!){
    addLyricToSong(content: $content, songId: $songId) {
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

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export {
  ADD_LYRIC, LIKE_LYRIC
};
