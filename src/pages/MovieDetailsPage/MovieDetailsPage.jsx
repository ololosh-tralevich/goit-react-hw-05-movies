import { Outlet } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
