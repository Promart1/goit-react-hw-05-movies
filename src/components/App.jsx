import { Route, Routes } from 'react-router-dom';

import Movies from './pages/Movies';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import MovieDetails from './MovieInfo/MovieInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
