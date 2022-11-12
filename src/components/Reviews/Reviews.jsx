import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = ({ getReviews }) => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    async function requestReviews() {
      const review = await getReviews(movieId);
      setReviews(review);
    }
    requestReviews();
  }, []);
  const { movieId } = useParams();
  const createMarcketReviews = reviews => {
    const a = reviews.map(({ id, author, content }) => {
      return (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      );
    });
    return a;
  };

  return <>{reviews && <div>{createMarcketReviews(reviews)}</div>}</>;
};
export default Reviews;
