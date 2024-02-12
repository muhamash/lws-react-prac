import { useState } from 'react';
import List from './List.jsx';
import SearchBar from './SearchBar.jsx';
import { filterItems, foods } from './data.js';

const FilterTex = () =>
{
    const [ query, setQuery ] = useState( '' );
    const results = filterItems( foods, query );

    function handleChange ( e )
    {
        setQuery( e.target.value );
    }

    return (
        <>
            <SearchBar
                query={ query }
                onChange={ handleChange }
            />
            <hr />
            <List items={ results } />
        </>
    );
};

export default FilterTex;