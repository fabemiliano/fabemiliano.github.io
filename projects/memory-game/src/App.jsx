import React, { useContext } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import FirstPage from './components/FirstPage';
import Scores from './components/Scores';
import { ContextAplication } from './context/context';

function App() {
  const { startGame, showScore } = useContext(ContextAplication);
  return (
    <div>
      {!startGame && !showScore && <FirstPage />}
      {startGame && !showScore && <GameBoard />}
      {showScore && !startGame && <Scores />}
    </div>
  );
}

export default App;
