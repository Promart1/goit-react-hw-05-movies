import React, { Suspense, useEffect, useState } from 'react';
import { getMovieDetails } from 'services/fetchApi';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <>
      <Link to={backLinkHref}>
        <AiFillCaretLeft />
        go back
      </Link>
      {movie && <MovieInfo movie={movie} />}

      <AdditionalInfo />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
