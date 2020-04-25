import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import { GET_SONG } from "../queries/songs";
import LyricList from './LyricList';
import LyricCreate from './LyricCreate';

const SongDetail = () => {
    let { id } = useParams();
    const { loading, error, data, refetch } = useQuery(GET_SONG, { variables: { id } });
  
    if (loading) return <div />;
    if (error) return <div>Error</div>;
  
    const { title, lyrics } = data.song;
  
    return (
      <div>
        <Link to="/songlist">Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics} />
        <LyricCreate songId={id} />
      </div>
    );
  };  
  
  export default SongDetail;