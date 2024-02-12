import { useState } from 'react';
import { letters } from './Data.js';
import Letter from './Letter';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState({
    toggle: [],
    count: 0
  });

  // TODO: allow multiple selection
  
  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    let updatedToggle;
    if(selectedId.toggle.includes(toggledId)){
      updatedToggle = selectedId.toggle.filter(id=> id != toggledId);
    }
    else{
      updatedToggle = [...selectedId.toggle, toggledId]
    }

    setSelectedId({
      toggle: updatedToggle,
      count: updatedToggle.length
    })
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedId.toggle.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedId.count} letters
          </b>
        </p>
      </ul>
    </>
  );
}