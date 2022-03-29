import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Header from './Movies/Header/Header';
// import MovieDetailsPage from './Movies/MovieDetailsPage/MovieDetailsPage';
// import HomePage from './Movies/HomePage';
// import MoviesPage from './Movies/MoviesPage/MoviesPage';

import LayoutPage from '../pages/LayoutPage/LayoutPage';
import HomePage from '../pages/HomePage/HomePage'

export const App = () => {
  const [filmId, setFilmId] = useState(0);

  const filmIdFunc = filmId => {
    setFilmId(filmId);
  };

  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<HomePage filmIdFunc={filmIdFunc} />} />
        <Route
          path="/movies"
          element={<MoviesPage filmIdFunc={filmIdFunc} />}
        />
        <Route path="/movies/:movieId" element={<MovieDetailsPage filmId={filmId}/>} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage filmIdFunc={filmIdFunc} />} />

        </Route>
        
      </Routes>

       {/* <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage filmIdFunc={filmIdFunc}/>} />
          <Route path="movies" element={<MoviesPage  filmIdFunc={filmIdFunc}/>} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage filmId={filmId} />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes> */}
    </>
  );
};
