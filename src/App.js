import React from 'react';
import { useState } from 'react';

function Square({value, onSquareClick}) {
  
  // Each Square component can have its own state, in the form of a value variable that maintains its state between renders.
  // value is the variable and setValue is the function that updates it.
  // In this case, value starts as null and is updated to 'X' when the button is clicked.
  // When you call a set function on a component, React automatically updates the child components inside of it too.
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue('X');
  // }

  return (
    <button 
      className="square"
      onClick={onSquareClick}
      >
        {value}
    </button>
  );
}


export default function Board() {
  // useState sets an initial state. In this case, it's an array of 9 nulls.
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <React.Fragment>
      {/* Each Square value prop is initialized with the Board's squares State. */}
      {/* Closures: Defining onSquareClick as a Prop in Square allows devs to handle the behaviour from an outer function in the parent Component. */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </React.Fragment>
  );
}
