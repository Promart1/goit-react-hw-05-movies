import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchApi';
import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCasts(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.error('Error searching actors:', error);
      }
    };

    movieCast();
  }, [movieId]);

  if (!casts) {
    return <p>Loading casts...</p>;
  }

  return (
    <div>
      <ul>
        {/* {casts &&
          casts.map(cast => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
              ) : (
                <img src="https://i.stack.imgur.com/l60Hf.png" alt="Default" />
              )}
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))} */}

        {casts.length === 0 ? (
          <li>
            <p className={css.message}>
              We do not have any casts for this movie
            </p>
          </li>
        ) : (
          casts.map(cast => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
              ) : (
                <img src="https://i.stack.imgur.com/l60Hf.png" alt="Default" />
              )}
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))
        )}
      </ul>
      <Outlet />
    </div>
  );
};

export default Cast;
