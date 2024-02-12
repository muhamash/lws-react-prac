import React, { useState } from 'react';
import { initialLetters } from './Data';
import Letter from './Letter';

const Main = () => {
    const [ state, setState ] = useState( {
        letters: initialLetters,
        highlighted: null
    })

    const onHoverHandle = (letterId) => {
        setState( {
            ...state,
            highlighted: letterId
        } )
    }
    
    const handleStar = (starredId) => {
        // setLetters(letters.map((letter) => {
        //     if (letter.id === starredId) {
        //         return {
        //             ...letter,
        //             isStarred: !letter.isStarred
        //         }
        //     }
        //     else
        //     {
        //         return letter;
        //     }
        // }));
        setState( {
            ...state,
            letters: state.letters.map( ( letter ) =>
            {
                if ( letter.id === starredId )
                {
                    return {
                        ...letter,
                        isStarred: !letter.isStarred
                    }
                }
                else
                {
                    return letter;
                }
            } )
        } )
    }

    return (
        <div>
            <h3>Inbox</h3>
            <ul>
                {state.letters.map((letter) => (
                    <Letter
                        key={letter.id}
                        isHighlighted={letter.id === state.highlighted}
                        onHover={onHoverHandle}
                        letter={letter}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Main;
