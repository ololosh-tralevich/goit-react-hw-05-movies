import { useState, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LayoutPage from '../pages/LayoutPage/LayoutPage';

import Cast from './Movies/Cast';
import Reviews from './Movies/Reviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  const [filmId, setFilmId] = useState(0);

  const filmIdFunc = filmId => {
    setFilmId(filmId);
  };

  return (
    <>
      <Suspense fallback={<p>...loading...</p>}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage filmIdFunc={filmIdFunc} />} />
            <Route
              path="movies"
              element={<MoviesPage filmIdFunc={filmIdFunc} />}
            />
            <Route
              path="movies/:movieId/"
              element={<MovieDetailsPage filmId={filmId} />}
            >
              <Route path="cast" element={<Cast filmId={filmId} />} />
              <Route path="reviews" element={<Reviews filmId={filmId} />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
