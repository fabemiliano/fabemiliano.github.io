import React, { useState, useContext } from 'react';
import { ApplicationContext } from '../context/Context'
import * as api from '../services/movieApi'

function doSearch(movie, setMovieList, apiType) {
  api.getMovie(movie, apiType).then((data) => setMovieList(data.results));
}

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const { setMovieList, setApiTypeForSearch, apiTypeForSearch } = useContext(ApplicationContext)
  return (
    <div>
      <input onKeyDown={(e) => { if (e.keyCode === 13) { doSearch(inputValue); } }}
        placeholder="Search for something" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <select onChange={(e) => setApiTypeForSearch(e.target.value)}>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
          <option value="people">People</option>
        </select>
      <button type="button" onClick={() => doSearch(inputValue, setMovieList, apiTypeForSearch)}>Pesquisar</button>
    </div>
  )
}

export default SearchBar
