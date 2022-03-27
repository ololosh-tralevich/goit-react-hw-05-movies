import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Movies/Header/Header';
import MovieDetailsPage from './Movies/MovieDetailsPage/MovieDetailsPage';
import MoviesMain from './Movies/HomePage';
import MoviesPage from './Movies/MoviesPage/MoviesPage';

export const App = () => {
  const [filmId, setFilmId] = useState(0);

  const filmIdFunc = filmId => {
    setFilmId(filmId);
  };
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesMain filmIdFunc={filmIdFunc} />} />
        <Route
          path="/movies"
          element={<MoviesPage filmIdFunc={filmIdFunc} />}
        />
        <Route path="/movies/:movieId" element={<MovieDetailsPage filmId={filmId}/>} />
      </Routes>
    </>
  );
};
