import { useRef, useEffect, useState } from 'react';

import FilmsList from './FilmsList/FilmsList';

import { getTrendingFilms } from './fetchFilms/fetchFilms';

 const MoviesMain = () => {
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

  return (
    <>
      <FilmsList films={films}/>
    </>
  );
};

export default MoviesMain;