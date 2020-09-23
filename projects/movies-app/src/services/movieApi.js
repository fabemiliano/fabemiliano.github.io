export const getMovie = async (movie, type) => {
  switch (type) {
    case 'tv': return fetch(`https://api.themoviedb.org/3/search/tv?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=1&include_adult=false&query=${movie}`)
      .then((response) => response.json());
    case 'people': return fetch(`https://api.themoviedb.org/3/search/person?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=1&include_adult=false&query=${movie}`)
      .then((response) => response.json());
    default: return fetch(`https://api.themoviedb.org/3/search/movie?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=1&include_adult=false&query=${movie}`)
    .then((response) => response.json());
  }
}

export const getMovieByGenre = async (genre, type) => {
  switch (type) {
    case 'tv': return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
      .then((response) => response.json());
    default: return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
    .then((response) => response.json());
  }
}

export const getTopMovies = async (type, page) => {
  // console.log(type)
  switch (type) {
    case 'tv': return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=${page}`)
      .then((response) => response.json());
    default: return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US&page=${page}`)
    .then((response) => response.json());
  }
}


export const getMovieInfo = async (type, id) => {
  console.log(type)
  if (type === 'movie') return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
    .then((response) => response.json());
  if (type === 'people') return fetch(`https://api.themoviedb.org/3/person/${id}?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
    .then((response) => response.json());
  return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
    .then((response) => response.json());
}

export const getMovieVideos = async (type, id) => {
  if (type === 'movie') return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
    .then((response) => response.json());
  return fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US`)
    .then((response) => response.json());
}

export const getPopular = async () => fetch('https://api.themoviedb.org/3/movie/popular/?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
  .then((response) => response.json());

export const getNowPlaying = async (type) => {
  if (type === 'movie')
    return fetch('https://api.themoviedb.org/3/movie/now_playing/?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
      .then((response) => response.json());
  if (type === 'people')
    return fetch('https://api.themoviedb.org/3/person/popular?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US')
      .then((response) => (response.json()));
  return fetch('https://api.themoviedb.org/3/tv/airing_today/?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
    .then((response) => response.json());
}

export const getGenres = async (type) => {
  if (type === 'movie') return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US')
    .then((response) => response.json());
  return fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=80a9758176e2dcd1c639e2bf0ad76fa0&language=en-US')
    .then((response) => response.json());
}


export const getReviews = async (type, id) => {
  if (type === 'movie') return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=80a9758176e2dcd1c639e2bf0ad76fa0`)
    .then((response) => response.json());
  if (type === 'movie') return fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=80a9758176e2dcd1c639e2bf0ad76fa0`)
    .then((response) => response.json());
}

export const trending = async () => fetch('https://api.themoviedb.org/3/trending/all/week?api_key=80a9758176e2dcd1c639e2bf0ad76fa0')
  .then((response) => response.json());
