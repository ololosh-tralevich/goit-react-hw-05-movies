import { useState, useEffect } from 'react';

import { getMovieReview } from '../fetchFilms/fetchFilms';

import style from './reviews.module.css';

const Reviews = ({ filmId }) => {
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    takeFetchData();
  }, []);

  async function takeFetchData() {
    try {
      const data = await getMovieReview(filmId);
      setFilmReviews(data.results);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  const partOfCode = filmReviews.map(review => {
    return (
      <li className={style.reviewItem} key={review.id}>
        <h2 className={style.reviewTitle}>{`Author: ${review.author}`}</h2>
        <p className={style.reviewText}>{review.content}</p>
      </li>
    );
  });

  return (
    <div className={style.filmReviewsBlock}>
      {filmReviews.length ? (
        <ul className={style.reviewList}>{partOfCode}</ul>
      ) : (
        <h1 style={{ textAlign: 'center' }}>No info about film review</h1>
      )}
    </div>
  );
};

export default Reviews;
