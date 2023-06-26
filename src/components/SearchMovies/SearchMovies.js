import { useState } from 'react';

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
        onChange={handleInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

      <button type="submit">search</button>
    </form>
  );
};

export default SearchMovies;
