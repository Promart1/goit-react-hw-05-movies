import css from '../MovieInfo/MoveInfo.module.css';
import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
  return (
    <div className={css.container}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        ></img>
      ) : (
        <img
          src="https://www.sheringtonprimary.co.uk/wp-content/uploads/film.jpg"
          alt="Default"
        />
      )}
      <div className={css.item}>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieInfo;
