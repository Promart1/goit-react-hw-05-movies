import SearchMovies from 'components/SearchMovies/SearchMovies';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoviesByName } from 'services/fetchApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryName, setQueryName] = useState('');

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

  const onSubmit = title => {
    setMovies([]);
    setQueryName(title);
  };
  return (
    <>
      <SearchMovies onSubmit={onSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
