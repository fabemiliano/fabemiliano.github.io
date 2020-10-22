import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationContext } from '../context/Context';
import logo from '../images/logo.png';
import './CSS/SearchBar.css';
import magnifier from '../images/loupe.svg';

async function doSearch(movie, apiType, setApiType, setBestMovies, setMovie, setSearchForSomething) {
  setBestMovies(false);
  setApiType(apiType);
  setMovie(movie);
  setSearchForSomething(true);
}

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const {
    setApiTypeForSearch,
    apiTypeForSearch, setApiType, setBestMovies, setMovie, setSearchForSomething,
  } = useContext(ApplicationContext);
  return (
    <div className="search-bar">
      <Link to="/" onClick={() => { setApiType('trending'); setBestMovies(false); }}><img src={logo} alt="logo" /></Link>
      <div className="search-area">
        <div className="input-area">
          <input
            onKeyDown={(e) => { if (e.keyCode === 13) { doSearch(inputValue, apiTypeForSearch, setApiType, setBestMovies, setMovie, setSearchForSomething); } }}
            placeholder="Search for something"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button disabled={((inputValue === ''))} type="button" onClick={() => { doSearch(inputValue, apiTypeForSearch, setApiType, setBestMovies, setMovie, setSearchForSomething); }}><img src={magnifier} /></button>
        </div>
        <select onChange={(e) => { setApiTypeForSearch(e.target.value); }}>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
          <option value="people">People</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
