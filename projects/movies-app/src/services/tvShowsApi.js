export const getTvShow = async (movie) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=1&include_adult=false&query=${movie}`)
  .then((response) => response.json());

export const getTvShowInfo = async (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
  .then((response) => response.json());

export const getTvShowVideos = async (id) => fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
  .then((response) => response.json());

export const getPopularTvShow = async () => fetch('https://api.themoviedb.org/3/movie/popular/?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
  .then((response) => response.json());

export const getTvShowsNowPlaying = async () => fetch('https://api.themoviedb.org/3/movie/now_playing/?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
  .then((response) => response.json());
