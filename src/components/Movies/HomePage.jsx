import { useRef, useEffect, useState } from 'react';

import FilmsList from './FilmsList/FilmsList';

import { getTrendingFilms } from './fetchFilms/fetchFilms';

const HomePage = ({ filmIdFunc }) => {
  const firstRender = useRef(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    takeFetchData();
  }, [firstRender]);

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

export default HomePage;
