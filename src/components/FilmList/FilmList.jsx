import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const FilmList = ({ filmsNames }) => {
  const location = useLocation();
  return (
    <ul>
      {filmsNames.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
