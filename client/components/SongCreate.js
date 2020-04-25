import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link, useHistory } from 'react-router-dom';
import { GET_SONGS } from "../queries/songs";
import { ADD_SONG } from "../mutations/songsmutation";

const SongCreate = () => {
    const [title, setTitle] = useState("");
    const [addSong] = useMutation(ADD_SONG, { refetchQueries: [{ query: GET_SONGS }]});
    const history = useHistory();
  
    const onSubmit = e => {
      e.preventDefault();
      addSong({
        variables: { title }
      }).then(({ data }) => {
        history.push("/songlist");
      })
    }
  
    return (
      <div>
        <Link to="/songlist">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={onSubmit}>
          <label>Song Title:</label>
          <input value={title} onChange={ e => setTitle(e.target.value) } />
        </form>
      </div>
    );
  };
  
  
  export default SongCreate;