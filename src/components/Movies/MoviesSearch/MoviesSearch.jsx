import { useState, memo } from 'react';

import { searchFilms } from '../fetchFilms/fetchFilms';

import PropTypes from 'prop-types';

import style from './MoviesSearch.module.css';

import searchIcon from '../img/searchIcon.svg';
import FilmsList from '../FilmsList/FilmsList';

const MoviesSearch = ({ filmIdFunc }) => {
  const [films, setFilms] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const handleChange = ev => {
    setSearchWord(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    searchWord.length && takeFetchData();
  };

  async function takeFetchData() {
    try {
      const data = await searchFilms(searchWord);
      setFilms(data.results);
    } catch (err) {
      console.log('Error:', err);
    }
  }

  return (
    <>
      <div className={style.searchbar}>
        <form className={style.searchForm} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            onChange={handleChange}
          />
          <button className={style.submitButton} type="submit">
            <img
              className={style.searchIcon}
              src={searchIcon}
              width="15px"
              alt="Search Icon"
            />
          </button>
        </form>
      </div>
      <FilmsList films={films} filmIdFunc={filmIdFunc} />
    </>
  );
};

export default memo(MoviesSearch);

MoviesSearch.propTypes = {
  filmIdFunc: PropTypes.func.isRequired,
};
