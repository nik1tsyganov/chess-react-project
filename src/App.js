import './App.css';
import { gameSubject } from './Game.js';
import React, { useEffect, useState } from 'react';
import Board from './Board.jsx'

function App() {

  const [board, setBoard] = useState([]);

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board));
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div>
      <Board board={board}/>
    </div>
  )
}

export default App;
