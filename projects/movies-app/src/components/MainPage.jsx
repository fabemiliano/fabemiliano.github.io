import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/movieApi';
import SideBar from './SideBar';
import './CSS/MainPage.css';
import { ApplicationContext } from '../context/Context';
import GenreSelector from './GenreSelector';
import SearchBar from './SearchBar';
import Loading from './Loading';

function renderList(movieList, setApiType, apiType) {
  return (
    <div>
      {(apiType !== 'people' && apiType !== 'trending') && <GenreSelector />}
      <div className="main-container">
        {movieList.map(({
          id, media_type, vote_average, poster_path, title, name, profile_path,
        }) => (
            <Link to={`/details/${id}`} onClick={() => { (media_type) && setApiType(media_type); }}>
              <div className="movie-infos">
                <div>
                  <h4>{media_type}</h4>
                  <h3>{title || name}</h3>
                </div>
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path || profile_path}`} alt="" />
                <p>{parseInt(vote_average).toFixed(1)}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

function renderPeople(movieList) {
  return (
    <div className="main-container">
      {movieList.map(({ id, name, profile_path }) => (
        <Link to={`/details/${id}`}>
          <div className="movie-infos">
            <div>
              <p>{name}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}

function renderBestMovies(movieList) {
  // console.log(movieList)
  return (
    <div>
      <div className="best-infos">
        <p>Position</p>
        <p>Rating</p>
        <p>Title</p>
      </div>
      <div className="best-bar">
        {movieList.map(({
          title, poster_path, vote_average, id,
        }, i) => (
            <Link to={`/details/${id}`}>
              <div className="best-infos">
                <p>{}</p>
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt="" />
                <div>
                  <p className="inner-text">{`${i + 1}. ${title}`}</p>
                </div>
                <p>{parseInt(vote_average, 10).toFixed(1)}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

function MainPage() {
  const {
    movieList, apiType, setApiType, filterGenre, bestMovies, isLoading,
  } = useContext(ApplicationContext);

  return (
    <div>
      <div className="side-and-main">
        <SideBar />
        <GenreSelector />
        <SearchBar />

        {(!isLoading) && (
          <div className="search-and-main">
            {(!bestMovies) && (apiType !== 'people') && renderList(movieList, setApiType, apiType, filterGenre)}
            {(!bestMovies) && (apiType === 'people') && renderPeople(movieList)}
            {(bestMovies) && renderBestMovies(movieList)}
          </div>
        )}
        {(isLoading) && <Loading />}
      </div>
    </div>
  );
}

export default MainPage;
