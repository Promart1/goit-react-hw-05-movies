import { useState } from 'react';
import css from '../SearchMovies/SearchMovies.module.css';

const SearchMovies = ({ onSubmit }) => {
  const [queryName, setQueryName] = useState('');

  const handleInput = event => {
    setQueryName(event.currentTarget.value.toLowerCase().trim());
  };
  const reset = () => {
    setQueryName('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(queryName);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        onChange={handleInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

      <button className={css.button} type="submit">
        search
      </button>
    </form>
  );
};

export default SearchMovies;
