import { useEffect, useState } from 'react';
import { useNavigate, NavLink, useLocation, useParams } from 'react-router-dom';
import { getFullMovieInfo } from '../../shared/services/fetchFilms';

import style from './MovieDetails.module.css';

const linkClassName = ({ isActive }) =>
  isActive ? style.activeAdditionalLink : style.additionalLink;

const MovieDetails = () => {
  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  const { movieId } = useParams();

  const [parsedGenres, setParsedGenres] = useState('');
  const [filmData, setFilmData] = useState({
    genres: [],
    poster_path: '',
    vote_average: 0,
    overview: '',
    original_name: '',
    loading: false,
    error: false,
  });

  useEffect(() => {
    takeFetchData();
    //eslint-disable-next-line
  }, [movieId]);

  useEffect(() => {
    filmData.genres && parseFilmGenres();
    //eslint-disable-next-line
  }, [filmData]);

  async function takeFetchData() {
    setFilmData(prevState => {
      return {
        ...prevState,
        loading: true,
      };
    });
    try {
      const data = await getFullMovieInfo(movieId);
      setFilmData({
        genres: data.genres,
        poster_path: data.poster_path,
        vote_average: data.vote_average,
        overview: data.overview,
        original_name: data.original_name,
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log('Error:', err);
      setFilmData(prevState => {
        return {
          ...prevState,
          error: true,
          loading: false,
        };
      });
    }
  }

  const parseFilmGenres = () => {
    const genres = [];
    for (const genre of filmData.genres) {
      genres.push(genre.name);
    }
    setParsedGenres(genres.join(', '));
  };
  return (
    <>
      {filmData.loading && <h2>Loading...</h2>}
      {filmData.error ? (
        <h2>Something went wrong...</h2>
      ) : (
        <div className={style.mainBlock}>
          <button onClick={() => navigate(from)} className={style.goBackBtn}>
            Go Back
          </button>
          <div className={style.filmInfoMain}>
            <div className={style.filmPoster}>
              {filmData.poster_path ? (
                <img
                  className={style.filmImg}
                  src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
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
              {filmData.title ? (
                <h2 className={style.filmTitle}>{filmData.title}</h2>
              ) : (
                <h2 className={style.filmTitle}>{filmData.original_name}</h2>
              )}
              <h3>User Score: {filmData.vote_average}</h3>
              <h3>Overview:</h3>
              <p>{filmData.overview}</p>
              <h3>Genres:</h3>
              {parsedGenres || <h4>{parsedGenres}</h4>}
            </div>
          </div>
          <div className={style.additionalInfo}>
            <ul className={style.additionalList}>
              <NavLink
                to={`/movies/${movieId}/cast`}
                className={linkClassName}
                state={{ from: from }}
              >
                <li>
                  <h4>Cast</h4>
                </li>
              </NavLink>
              <h2 className={style.additionalInfoTitle}>Additional Info</h2>
              <NavLink
                to={`/movies/${movieId}/reviews`}
                className={linkClassName}
                state={{ from: from }}
              >
                <li>
                  <h4>Reviews</h4>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
