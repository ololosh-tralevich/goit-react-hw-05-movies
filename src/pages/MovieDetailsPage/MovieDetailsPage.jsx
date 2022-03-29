import { Outlet } from 'react-router-dom';
import MovieDetails from '../../components/Movies/MovieDetails/MovieDetails';

const MovieDetailsPage = ({ filmId }) => {
  return (
    <>
      <MovieDetails filmId={filmId} />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
