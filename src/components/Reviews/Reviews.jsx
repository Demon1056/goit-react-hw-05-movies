import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesReviews } from 'Api';

const Reviews = () => {
  const [moviesReviews, setmoviesReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    async function updateMoviesReviews() {
      const reviews = await requestMoviesReviews(movieId);
      setmoviesReviews(reviews);
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
        <p>Non reviews</p>
      )}
    </>
  );
};

export default Reviews;
