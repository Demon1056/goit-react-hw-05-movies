import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesReviews } from 'Api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function updateMoviesReviews() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const reviews = await requestMoviesReviews(movieId);
        setMoviesReviews(reviews);
        if (reviews.length === 0) {
          Notify.info("Nobody didn't write review for this movie");
        }
      } catch (error) {
        console.log(error);
      } finally {
        Loading.remove();
      }
    }
    updateMoviesReviews();
  }, [movieId]);

  const createReviewsMarkup = moviesReviews => {
    const markup = moviesReviews.map(({ id, author, content }) => {
      return (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      );
    });
    return markup;
  };

  return (
    <>
      {moviesReviews && moviesReviews.length > 0 ? (
        <div>{createReviewsMarkup(moviesReviews)}</div>
      ) : (
        <p>There is no reviews</p>
      )}
    </>
  );
};

export default Reviews;
