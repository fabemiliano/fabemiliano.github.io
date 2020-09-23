import React, { useContext } from 'react';
import { ContextAplication } from '../context/context';

function Scores() {
  const storage = JSON.parse(localStorage.getItem('memoryStore'));
  storage.sort((a, b) => ((a.click > b.click) ? 1 : -1));
  const {
    name, score, setStartGame, setShowScore,
  } = useContext(ContextAplication);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{score}</h2>
      <h1>Ranking</h1>
      {storage.map((e) => (
        <div>
          <p>{e.name}</p>
          <p>{e.click}</p>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setStartGame(false);
          setShowScore(false);
        }}
      >
        Voltar pro Início

      </button>
    </div>
  );
}

export default Scores;
