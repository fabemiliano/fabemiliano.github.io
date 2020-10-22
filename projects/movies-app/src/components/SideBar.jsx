import React, { useContext } from 'react';
import './CSS/SideBar.css';
import { Link } from 'react-router-dom';
import { ApplicationContext } from '../context/Context';

function SideBar() {
  const {
    setApiType, apiType, setBestMovies, bestMovies,
  } = useContext(ApplicationContext);

  return (
    <div className="sidebar">
      <Link to="/" className={(apiType === 'trending') && 'selected'} onClick={() => { setApiType('trending'); setBestMovies(false); }}><p>Trending</p></Link>
      <Link to="/" className={(apiType === 'movie' && !bestMovies) && 'selected'} onClick={() => { setApiType('movie'); setBestMovies(false); }}><p>Movies</p></Link>
      <Link to="/" className={(apiType === 'tv') && 'selected'} onClick={() => { setApiType('tv'); setBestMovies(false); }}><p>TV</p></Link>
      <Link to="/" className={(apiType === 'people') && 'selected'} onClick={() => { setApiType('people'); setBestMovies(false); }}><p>People</p></Link>
      <Link to="/" className={(apiType === 'movie' && bestMovies) && 'selected'} onClick={() => { setApiType('movie'); setBestMovies(true); }}><p>The 200 Best Movies</p></Link>
    </div>
  );
}

export default SideBar;
