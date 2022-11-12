import { Link } from 'react-router-dom';

export const FilmList = ({ filmsNames }) => {
  return (
    <ul>
      {filmsNames.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
