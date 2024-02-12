import { useState } from 'react';

const Form = () =>
{
    const[text, setText]= useState('')
    return (
        <textarea
            value={ text }
            onChange={ e => setText( e.target.value ) }
        />
    );
};

export default Form;