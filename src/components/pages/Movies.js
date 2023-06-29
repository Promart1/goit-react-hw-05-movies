import SearchMovies from 'components/SearchMovies/SearchMovies';
import React, { useEffect, useState } from 'react';
import {
  Link,
  unstable_HistoryRouter,
  useSearchParams,
} from 'react-router-dom';
import { getMoviesByName } from 'services/fetchApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryName, setQueryName] = useState('');
  // const movies = getMoviesByName();
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('title') ?? '';

  // const visibleMovie = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(movieName.toLowerCase())
  // );

  // const updateQueryString = title => {
  //   const nextParams = title !== '' ? { title } : {};
  //   setSearchParams(nextParams);
  // };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const data = await getMoviesByName(queryName);
        setMovies(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    searchMovies();
  }, [queryName]);

  useEffect(() => {
    const initialSearchParams = new URLSearchParams(window.location.search);
    const initialMovieName = initialSearchParams.get('title') || '';
    setQueryName(initialMovieName);
  }, []);

  const onSubmit = title => {
    // setMovies([]);
    setQueryName(title);
  };
  return (
    <>
      <SearchMovies value={movieName} onSubmit={onSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      {/* <MoviesList movies={movies} /> */}
    </>
  );
};

export default Movies;
