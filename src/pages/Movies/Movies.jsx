import { useSearchParams, Link } from 'react-router-dom';
import { FindForm } from 'components/Form/Form';
import { useEffect, useState } from 'react';

const Movies = ({ getFilmsByName }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState(null);
  const filmName = searchParams.get('name') ?? '';

  useEffect(() => {
    async function requestFilmsByName() {
      if (!filmName) {
        setFilms(null);
        return;
      }
      const filmsArray = await getFilmsByName(filmName);
      setFilms(filmsArray);
    }
    requestFilmsByName();
  }, [filmName]);
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <h2>Find movies</h2>
      <FindForm handleChange={updateQueryString} />
      {films && (
        <ul>
          {films.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
