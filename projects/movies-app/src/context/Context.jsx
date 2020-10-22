import React, { createContext, useState, useEffect } from 'react';
import * as api from '../services/movieApi';

export const ApplicationContext = createContext();

async function getListOfBestMovies(setMovieList, setIsLoading) {
  const arrayOfMovies = [];
  for (let i = 1; i < 11; i += 1) {
    const arr = await api.getTopMovies('movie', i).then(({ results }) => { setIsLoading(false); return results; });
    arr.forEach((e) => arrayOfMovies.push(e));
  }
  setMovieList(arrayOfMovies);
}

export function ApplicationProvider({ children }) {
  const [apiType, setApiType] = useState('trending');
  const [apiTypeForSearch, setApiTypeForSearch] = useState('movie');
  const [movieList, setMovieList] = useState([]);
  const [filterGenre, setFilterGenre] = useState([]);
  const [bestMovies, setBestMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchForSomething, setSearchForSomething] = useState(false);
  const [movie, setMovie] = useState('');
  // console.log(apiType)

  useEffect(() => {
    if (!bestMovies) {
      if (apiType === 'trending') {
        api.trending().then(({ results }) => {
          setMovieList(results);
          setIsLoading(false);
        });
      } else if (searchForSomething) {
        api.getMovie(movie, apiType).then((data) => {
          setIsLoading(false);
          const onlyWithPoster = (data.results).reduce((acc, e) => {
            if (!e.poster_path) return acc;
            return [...acc, e];
          }, []);
          setMovieList(onlyWithPoster);
        });
      } else {
        api.getNowPlaying(apiType).then(({ results }) => {
          setMovieList(results);
          setIsLoading(false);
        });
      }
    } else {
      getListOfBestMovies(setMovieList, setIsLoading);
    }
    return () => { setIsLoading(true); setSearchForSomething(false); };
  }, [apiType, bestMovies]);

  const context = {
    movieList,
    apiType,
    setApiType,
    setMovieList,
    apiTypeForSearch,
    setApiTypeForSearch,
    filterGenre,
    setFilterGenre,
    bestMovies,
    setBestMovies,
    isLoading,
    setIsLoading,
    searchForSomething,
    setSearchForSomething,
    movie,
    setMovie,
  };

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}
