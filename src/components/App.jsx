import { Route, Routes } from 'react-router-dom';

import Header from './Movies/Header/Header';
import MoviesMain from './Movies/MoviesMain';
import SearchMovies from './Movies/SearchMovies/SearchMovies';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<MoviesMain />} />
        <Route path="/movies" element={<SearchMovies />} />
      </Routes>
    </>
  );
};
