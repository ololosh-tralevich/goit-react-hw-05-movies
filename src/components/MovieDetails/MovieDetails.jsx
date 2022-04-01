import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { getFullMovieInfo } from '../../shared/services/fetchFilms';

import PropTypes from 'prop-types';

import style from './MovieDetails.module.css';

const linkClassName = ({ isActive }) =>
  isActive ? style.activeAdditionalLink : style.additionalLink;

const MovieDetails = ({ filmId }) => {
  const navigate = useNavigate();
  const [film, setFilm] = useState({});
  const [filmGenres, setFilmGenres] = useState('');

  useEffect(() => {
    takeFetchData();
    //eslint-disable-next-line
  }, [filmId]);

  useEffect(() => {
    film.genres && parseFilmGenres();
    //eslint-disable-next-line
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
      <button onClick={() => navigate(-1)} className={style.goBackBtn}>
        Go Back
      </button>
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
        <ul className={style.additionalList}>
          <NavLink to={`/movies/${filmId}/cast`} className={linkClassName}>
            <li>
              <h4>Cast</h4>
            </li>
          </NavLink>
          <h2 className={style.additionalInfoTitle}>Additional Info</h2>
          <NavLink to={`/movies/${filmId}/reviews`} className={linkClassName}>
            <li>
              <h4>Reviews</h4>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  filmId: PropTypes.number.isRequired,
}