import axios from 'axios';

export const getEpisodes = () => axios.get('https://rickandmortyapi.com/api/episode');
