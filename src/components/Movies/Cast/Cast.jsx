import { useEffect, useState } from 'react';
import { getMovieCast } from '../fetchFilms/fetchFilms';

import PropTypes from 'prop-types'

import style from './cast.module.css';

const Cast = ({ filmId }) => {
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    takeFetchData();
        //eslint-disable-next-line
  }, []);

  async function takeFetchData() {
    try {
      const data = await getMovieCast(filmId);
      setFilmCast(data.cast);
    } catch (err) {
      console.log('Error: ', err);
    }
  }
  const partOfCode = filmCast.map(actor => {
    return (
      <li className={style.filmCastItem} key={actor.id}>
        {actor.profile_path ? (
          <img
            className={style.filmCastImg}
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt="Actor"
            loading="lazy"
          ></img>
        ) : (
          <img
            className={style.filmCastImg}
            src="https://st3.depositphotos.com/10654668/i/600/depositphotos_134263580-stock-photo-man-holding-card-with-question.jpg"
            alt="Actor"
            loading="lazy"
          ></img>
        )}
        <p className={style.actorTitle}>{'Name:'}</p>
        <p className={style.actorName}>{actor.name}</p>
        <p className={style.actorTitle}>Character:</p>
        <p className={style.actorName}>{actor.character}</p>
      </li>
    );
  });
  return (
    <div className={style.filmCastBlock}>
      {filmCast.length ? (
        <ul className={style.filmCastList}>{partOfCode}</ul>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No info about film cast</h1>
      )}
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  filmId: PropTypes.number.isRequired
}