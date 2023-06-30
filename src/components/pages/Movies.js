import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/fetchApi';

const Movies = () => {
 

  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    setMovies(null);

    getMoviesByName(query)
      .then(data => {
        if (data.results.length < 1) {
          setMovies(null);

          return <div>There are no movies with name ${query}</div>;
        }
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, [query]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchMovies onSubmit={handleFormSubmit} />
      
      {movies && (
        <MoviesList movies={movies} path="" state={{ from: location }} />
      )}
    </>
  );
};

export default Movies;
