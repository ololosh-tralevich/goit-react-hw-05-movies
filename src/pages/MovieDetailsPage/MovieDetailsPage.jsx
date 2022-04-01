import { Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';

import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MovieDetailsPage = ({ filmId }) => {
  return (
    <>
      <MovieDetails filmId={filmId} />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  filmId: PropTypes.number.isRequired
};