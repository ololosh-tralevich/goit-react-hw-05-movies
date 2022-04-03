import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import FilmsList from '../FilmsList/FilmsList';

import { getTrendingFilms } from '../../shared/services/fetchFilms';

const TrendingMovies = ({ filmIdFunc }) => {
  const [filmsData, setFilmsData] = useState({
    films: [],
    error: false,
    loading: false,
  });

  useEffect(() => {
    takeFetchData();
    //eslint-disable-next-line
  }, []);

  async function takeFetchData() {
    setFilmsData(prevState => {
      return { ...prevState, loading: true };
    });
    try {
      const data = await getTrendingFilms();
      setFilmsData({
        films: data.results,
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log(err);
      setFilmsData(prevState => {
        return { ...prevState, error: true, loading: false };
      });
    }
  }

  return (
    <>
      {filmsData.loading && <h2>Searching...</h2>}
      {filmsData.error && <h2>Something went wrong...</h2>}
      {Boolean(filmsData.films.length) && (
        <FilmsList films={filmsData.films} filmIdFunc={filmIdFunc} />
      )}
    </>
  );
};

export default TrendingMovies;

TrendingMovies.propTypes = {
  filmIdFunc: PropTypes.func.isRequired,
};
