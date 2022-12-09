import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  let status
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'
      } `;
  }
  const handleClick = (i) => {
    const newSquares = current.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: newSquares }])
    setXIsNext(previousValue => !previousValue);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] &&
        squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <div className='game'>
      {/* game-board */}
      <div className='game-board'>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)} />
      </div>
      {/* game-info */}
      <div className='game-info'>
        {/* status */}
        <div className='status'>{status}</div>
        {/* TODO */}
        <ol></ol>
      </div>
    </div>
  )
}
export default App;