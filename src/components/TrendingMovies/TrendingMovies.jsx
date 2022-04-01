import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import FilmsList from '../FilmsList/FilmsList';

import { getTrendingFilms } from '../../shared/services/fetchFilms';

const TrendingMovies = ({ filmIdFunc }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    takeFetchData();
    //eslint-disable-next-line
  }, []);

  async function takeFetchData() {
    try {
      const data = await getTrendingFilms();
      setFilms(data.results);
    } catch (err) {
      console.log('Error:', err);
    }
  }

  // const filmIdFunc = (filmId) => {
  //   console.log(filmId)
  // }

  return (
    <>
      <FilmsList films={films} filmIdFunc={filmIdFunc} />
    </>
  );
};

export default TrendingMovies;

TrendingMovies.propTypes = {
  filmIdFunc: PropTypes.func.isRequired,
}