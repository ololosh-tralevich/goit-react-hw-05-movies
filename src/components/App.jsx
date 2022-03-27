import { Route, Routes } from 'react-router-dom';

import { useRef, useEffect, useState } from 'react';

import Header from './Header/Header'
import FilmsList from './FilmsList/FilmsList';

import { fetchFilms } from './fetchFilms/fetchFilms';

export const App = () => {
  const firstRender = useRef(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (firstRender.current) {
      takeFetchData();
    }
  });

  async function takeFetchData() {
    firstRender.current = false;
    try {
      const data = await fetchFilms();
      setFilms(data.results);
    } catch (err) {
      console.log('Error:', err);
    }
  }
  return (<>
    <Header/>
      <Routes>
        <Route path="/" element={<FilmsList films={films} />} />
      </Routes></>
  );
};
