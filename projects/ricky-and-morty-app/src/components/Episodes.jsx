import React, { useState, useEffect } from 'react';
import { getEpisodes } from '../services/api';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes().then(({ data: { results } }) => { setEpisodes(results); });
  }, []);
  return (
    <div>
      <p>Teste</p>
      {episodes.map(({ episode, name }) => (
        <div key={ episode }>
          <p>{episode}</p>
          <p>{name}</p>
        </div>))}
    </div>
  );
}
