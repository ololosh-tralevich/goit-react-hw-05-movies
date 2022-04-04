import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReview } from '../../shared/services/fetchFilms';

import style from './reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [filmData, setFilmData] = useState({
    reviews: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    takeFetchData();
    // eslint-disable-next-line
  }, []);

  async function takeFetchData() {
    setFilmData(prevState => {
      return { ...prevState, loading: true };
    });
    try {
      const data = await getMovieReview(movieId);
      setFilmData({ reviews: data.results, loading: false, error: false });
    } catch (err) {
      console.log(err);
      setFilmData(prevState => {
        return { ...prevState, loading: false, error: true };
      });
    }
  }

  const partOfCode = filmData.reviews.map(review => {
    return (
      <li className={style.reviewItem} key={review.id}>
        <h2 className={style.reviewTitle}>{`Author: ${review.author}`}</h2>
        <p className={style.reviewText}>{review.content}</p>
      </li>
    );
  });

  return (
    <div className={style.filmReviewsBlock}>
      {filmData.loading && <h2>Searching...</h2>}
      {filmData.error && <h2>Something went wrong...</h2>}
      {filmData.reviews.length ? (
        <ul className={style.reviewList}>{partOfCode}</ul>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No info about film review</h1>
      )}
    </div>
  );
};

export default Reviews;
