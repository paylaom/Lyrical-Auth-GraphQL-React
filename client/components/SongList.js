import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link } from "react-router-dom";
import { GET_SONGS } from "../queries/songs";
import { DELETE_SONG } from '../mutations/songsmutation';

const SongList = () => {
    const { loading, error, data, refetch } = useQuery(GET_SONGS);
    const [deleteSong] = useMutation(DELETE_SONG);

    if (loading) return <div />;
    if (error) return <div>Error</div>;
   
    const renderSongs = () => {
        return (data.songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                    <Link to={`/songs/${id}`}>{title}</Link>
                    <i
                        className="material-icons"
                        onClick={() => {
                            deleteSong({ variables: { id } }).
                                then(() => refetch());
                        }}
                    >
                        delete
                </i>
                </li>
            );
        }));
    };

    return (
        <div>
            <h4 className="collection-header">SongList</h4>
            <ul className="collection">
                {renderSongs()}
            </ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
    );
};


export default SongList;