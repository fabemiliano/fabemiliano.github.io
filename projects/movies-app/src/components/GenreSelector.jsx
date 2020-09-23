import React, { useState, useEffect, useContext } from 'react';
import * as api from '../services/movieApi';
import { ApplicationContext } from '../context/Context';

function GenreSelector() {
  const [genres, setGenres] = useState([]);
  const {
    apiType, filterGenre, setFilterGenre, setMovieList,
  } = useContext(ApplicationContext);

  useEffect(() => {
    api.getGenres(apiType).then(({ genres }) => setGenres([{ name: 'All' }, ...genres]));
  }, []);

  async function filterMovies(filter, type, setMovieList) {
    if (filter !== 'All') {
      const genreId = (await api.getGenres(type).then(({ genres }) => genres)).filter((e) => e.name === filter)[0].id;
      api.getMovieByGenre(genreId, type).then((data) => setMovieList(data.results));
    } else {
      api.getNowPlaying(type).then((data) => setMovieList(data.results));
    }
  }
  return (
    <div>
      <select onChange={(e) => { setFilterGenre(e.target.value); filterMovies(e.target.value, apiType, setMovieList); }} value={filterGenre}>
        {genres.map(({ name }) => <option value={name}>{name}</option>)}
      </select>
    </div>
  );
}

export default GenreSelector;
