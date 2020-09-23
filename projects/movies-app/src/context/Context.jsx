import React, { createContext, useState, useEffect } from 'react';
import * as api from '../services/movieApi';

export const ApplicationContext = createContext();

async function getListOfBestMovies(setMovieList) {
  const arrayOfMovies = [];
  for (let i = 1; i < 11; i += 1) {
    const arr = await api.getTopMovies('movie', i).then(({ results }) => results);
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
  // console.log(movieList)

  useEffect(() => {
    if (!bestMovies) {
      if (apiType === 'trending') {
        api.trending().then(({ results }) => {
          setMovieList(results);
        });
      } else {
        api.getNowPlaying(apiType).then(({ results }) => {
          setMovieList(results);
        });
      }
    } else {
      getListOfBestMovies(setMovieList);
    }
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
  };

  return (
    <ApplicationContext.Provider value={context}>
      {children}
    </ApplicationContext.Provider>
  );
}
