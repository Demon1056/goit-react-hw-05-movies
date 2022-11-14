import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const AdditionalInfo = ({ filmsDatails }) => {
  const { id } = filmsDatails;
  const location = useLocation();
  return (
    <div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`} state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${id}/reviews`}
            state={{ from: location.state.from }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
