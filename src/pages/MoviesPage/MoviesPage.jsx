import PropTypes from 'prop-types';

import MoviesSearch from '../../components/MoviesSearch/MoviesSearch';

const MoviesPage = ({ filmIdFunc }) => {
  return <MoviesSearch filmIdFunc={filmIdFunc} />;
};

export default MoviesPage;

MoviesPage.propTypes = {
  filmIdFunc: PropTypes.func.isRequired
}