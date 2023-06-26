import React, { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/fetchApi';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   useEffect(() => {
  //     getMovieDetails(movieId)
  //       .then(data => {
  //         setMovie(data);
  //       })
  //       .catch(err => console.error(err));
  //   }, [movieId]);
  useEffect(() => {
    const movieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error searching movie:', error);
      }
    };

    movieDetails();
  }, [movieId]);
  return <>{movie && <MovieInfo movie={movie} />}</>;
};

export default MovieDetails;
