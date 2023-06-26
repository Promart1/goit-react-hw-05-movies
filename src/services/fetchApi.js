import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDhiMzA3Yjc3Nzc0MWQwN2QwZTg4NTgzMzkyMWE4NCIsInN1YiI6IjY0OTcyMmRlYjM0NDA5MDBlMjcxYWNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nGnsxic-Eqjb3RquRboL6o3Q58xkv1131q1IZQJtUA',
  },
};

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  const data = response.data;
  return data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, options);
  const data = response.data;
  return data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    options
  );
  const data = response.data;
  return data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    options
  );
  const data = response.data;
  return data;
};

export const getMoviesByName = async queryName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${queryName}&page=1`,
    options
  );
  const data = response.data;
  return data;
};
