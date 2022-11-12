import { Link } from 'react-router-dom';

export const AdditionalInfo = ({ filmsDatails }) => {
  const { id } = filmsDatails;
  return (
    <div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
