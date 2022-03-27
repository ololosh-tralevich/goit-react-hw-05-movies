import style from './filmsList.module.css';

const FilmsList = ({ films }) => {
  const partOfCode = films.map(film => {
    return (
      <li className={style.filmListItem} key={film.id}>
        <img
          className={style.filmListItemImg}
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt="Film Poster"
          loading="lazy"
        ></img>
        {film.title ? (
          <h4 className={style.filmTitle}>{film.title}</h4>
        ) : (
          <h4 className={style.filmTitle}>{film.original_name}</h4>
        )}
      </li>
    );
  });

  return <ul className={style.filmsList}>{partOfCode}</ul>;
};

export default FilmsList;
