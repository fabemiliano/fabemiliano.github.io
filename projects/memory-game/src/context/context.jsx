import React, { useState } from 'react';

export const ContextAplication = React.createContext();

function ApplicationProvider({ children }) {
  const [startGame, setStartGame] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const context = {
    startGame,
    setStartGame,
    nameInput,
    setNameInput,
    name,
    setName,
    showScore,
    setShowScore,
    score,
    setScore,
  };
  return (
    <ContextAplication.Provider value={context}>
      {children}
    </ContextAplication.Provider>
  );
}

export default ApplicationProvider;
