/* eslint-disable react/prop-types */
import { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add item..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;