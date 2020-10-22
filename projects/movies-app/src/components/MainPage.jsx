import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import './CSS/MainPage.css';
import { ApplicationContext } from '../context/Context';
import GenreSelector from './GenreSelector';
import SearchBar from './SearchBar';
import Loading from './Loading';

function renderList(movieList, setApiType, apiType) {
  return (
    <div className="main-page">
      {(apiType !== 'people' && apiType !== 'trending') && <GenreSelector />}
      <div className="main-container">
        {movieList.map(({
          id, media_type: mediaType,
          vote_average: voteAverage,
          poster_path: posterPath, title, name, profile_path: profilePath,
        }) => (
          <Link to={`/details/${id}`} onClick={() => { if (mediaType) { setApiType(mediaType); } }}>
            <div className="movie-infos">
              <div>
                <h4>{mediaType}</h4>
                <h3>{title || name}</h3>
              </div>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath || profilePath}`} alt="" />
              <p>{`${parseInt(voteAverage, 10).toFixed(1)}`}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function renderPeople(movieList) {
  return (
    <div className="people-container">
      {movieList.map(({ id, name, profile_path: profilePath }) => (
        <Link to={`/details/${id}`}>
          <div className="people-card">
            <div>
              <p>{name}</p>
            </div>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${profilePath}`} alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
}

function renderBestMovies(movieList) {
  return (
    <div className="best-container">
      <div className="best-infos-main">
        <p>Position</p>
        <p>Title</p>
        <p>Rating</p>
      </div>
      <div className="best-bar">
        {movieList.map(({
          title, poster_path: posterPath, vote_average: voteAverage, id,
        }, i) => (
          <Link to={`/details/${id}`}>
            <div className="best-infos">
              <p>{}</p>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`} alt="" />
              <div>
                <p className="inner-text">{`${i + 1}. ${title}`}</p>
              </div>
              <p>{parseInt(voteAverage, 10).toFixed(1)}</p>
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
      <div className="all-screen">
        <SearchBar />
        <div className="side-and-main">
          <SideBar />
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
    </div>
  );
}

export default MainPage;
