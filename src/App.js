import React from 'react';
import { useState } from 'react';

function Square() {
  // Each Square component has its own state, in the form of a value variable that maintains its state between renders.
  // value is the variable and setValue is the function that updates it.
  // In this case, value starts as null and is updated to 'X' when the button is clicked.
  // When you call a set function on a component, React automatically updates the child components inside of it too.
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
      >
        {value}
    </button>
  );
}


export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
}
