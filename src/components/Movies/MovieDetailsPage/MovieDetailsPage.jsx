import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getFullMovieInfo } from '../fetchFilms/fetchFilms';

import style from './movieDetailsPage.module.css';

const MovieDetailsPage = ({ filmId }) => {
//   const firstRender = useRef(true);
  const [film, setFilm] = useState({});
  const [filmGenres, setFilmGenres] = useState('');

  //   useEffect(() => {
  //     if (firstRender.current) {
  //       takeFetchData();
  //       firstRender.current = false;
  //     }
  //   }, []);

  useEffect(() => {
    takeFetchData();
  }, [filmId]);

  useEffect(() => {
    film.genres && parseFilmGenres();
  }, [film]);

  async function takeFetchData() {
    try {
      const data = await getFullMovieInfo(filmId);
      setFilm(data);
    } catch (err) {
      console.log('Error:', err);
    }
  }

  const parseFilmGenres = () => {
    const genres = [];
    for (const genre of film.genres) {
      genres.push(genre.name);
    }
    setFilmGenres(genres.join(', '));
  };

  return (
    <div className={style.mainBlock}>
      <Link to="/movies" className={style.goBackLink}>
        Go Back
      </Link>
      <div className={style.filmInfoMain}>
        <div className={style.filmPoster}>
          {film.poster_path ? (
            <img
              className={style.filmImg}
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt="Film Poster"
              loading="lazy"
            ></img>
          ) : (
            <img
              className={style.filmImg}
              src="https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4="
              alt="Film Poster"
              loading="lazy"
            ></img>
          )}
        </div>
        <div className={style.filmInfo}>
          {film.title ? (
            <h2 className={style.filmTitle}>{film.title}</h2>
          ) : (
            <h2 className={style.filmTitle}>{film.original_name}</h2>
          )}
          <h3>User Score: {film.vote_average}</h3>
          <h3>Overview:</h3>
          <p>{film.overview}</p>
          <h3>Genres:</h3>
          {filmGenres || <h4>{filmGenres}</h4>}
        </div>
      </div>
      <div className={style.additionalInfo}>
        <h3>Additional Info:</h3>
      </div>
    </div>
  );
};

export default MovieDetailsPage;