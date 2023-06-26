const MovieInfo = ({ movie }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      ></img>
      <h2>{movie.title}</h2>
      <p>User score: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
    </>
  );
};

export default MovieInfo;
