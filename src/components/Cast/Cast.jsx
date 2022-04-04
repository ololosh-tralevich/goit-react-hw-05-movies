import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../shared/services/fetchFilms';

import style from './cast.module.css';

const Cast = () => {
  const { movieId } = useParams();


  const [filmData, setFilmData] = useState({
    cast: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    takeFetchData();
    //eslint-disable-next-line
  }, []);

  async function takeFetchData() {
    setFilmData(prevState => {
      return { ...prevState, loading: true };
    });
    try {
      const data = await getMovieCast(movieId );
      setFilmData({ cast: data.cast, loading: false, error: false });
    } catch (err) {
      console.log(err);
      setFilmData(prevState => {
        return { ...prevState, error: true, loading: false };
      });
    }
  }
  const partOfCode = filmData.cast.map(actor => {
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
      {filmData.loading && <h2>Searching...</h2>}
      {filmData.error && <h2>Something went wrong...</h2>}
      {filmData.cast.length ? (
        <ul className={style.filmCastList}>{partOfCode}</ul>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No info about film cast</h1>
      )}
    </div>
  );
};

export default Cast;

