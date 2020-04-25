import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_LYRIC } from "../queries/lyrics";

const LyricCreate = ({ songId }) => {
    const [content, setContent] = useState("");
    const [addLyric] = useMutation(ADD_LYRIC);
  
    const onSubmit = e => {
      e.preventDefault();
      setContent("");
  
      addLyric({
        variables: { songId, content }
      });
    }
  
    return (
      <form onSubmit={onSubmit}>
        <label>Add a Lyric</label>
        <input value={content} onChange={ e => setContent(e.target.value) } />
      </form>
    );
  };
  
  
  export default LyricCreate;