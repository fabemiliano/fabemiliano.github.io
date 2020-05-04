import React from 'react';
import './App.css';


const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const comprimissos = ['estudar', 'cozinhar', 'limpar a casa']

function App() {
  return (
    <div className="App">
  {task(10)}
  {comprimissos.map(el => <p>{el}</p>)}
    </div>
  );
}

export default App;
