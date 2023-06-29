import { useState } from 'react';
import css from '../SearchMovies/SearchMovies.module.css';

const SearchMovies = ({ onSubmit, onChange, value }) => {
  const [queryName, setQueryName] = useState('');

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
        value={value}
        onChange={e => onChange(e.target.value)}
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
