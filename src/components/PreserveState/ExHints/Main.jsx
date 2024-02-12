import React, { useState } from 'react';
import Form from './Form';

const Main = () => {
    const [hintVisible, setHintVisible] = useState(false);

    const toggleHint = () => {
        setHintVisible((prevHintVisible) => !prevHintVisible);
    };

    return (
        <div>
            {hintVisible && (
                <div>
                    <p><i>Hint: There is no hint left!</i></p>
                </div>
            )}
            <Form />
            <button onClick={toggleHint}>
                {hintVisible ? 'Hide hint' : 'Show hint'}
            </button>
        </div>
    );
};

export default Main;