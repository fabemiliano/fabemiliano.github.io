import React, { useContext } from 'react';
import { ContextAplication } from '../context/context';

function FirstPage() {
  const {
    setStartGame, nameInput, setNameInput, setName,
  } = useContext(ContextAplication);
  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Digite seu nome</h2>
      <input onChange={(e) => setNameInput(e.target.value)} value={nameInput} />
      <button
        type="button"
        onClick={() => {
          setStartGame(true);
          setName(nameInput); setNameInput('');
        }}
      >
        Start Game

      </button>
    </div>
  );
}

export default FirstPage;
