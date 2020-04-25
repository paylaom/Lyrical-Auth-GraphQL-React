import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_LYRIC } from '../queries/lyrics';


const LyricList = ({ lyrics }) => {
    const [likeLyric] = useMutation(LIKE_LYRIC);

    const renderLyrics = () => {
        return (lyrics.map(({ id, content, likes }) => {
            return (
                <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        {likes}
                        <i
                            className="material-icons"
                            onClick={() => {
                                likeLyric({
                                    variables: { id },
                                    optimisticResponse: {
                                        __typename: "Mutation",
                                        likeLyric: {
                                            __typename: "LyricType",
                                            id,
                                            likes: likes + 1
                                        }
                                    }
                                });
                            }}
                        >
                            thumb_up
              </i>
                    </div>
                </li>
            );
        }));
    };

    return (
        <ul className="collection">
            {renderLyrics()}
        </ul>
    );
};


export default LyricList;