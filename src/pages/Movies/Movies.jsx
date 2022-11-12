import { useSearchParams } from 'react-router-dom';
import { FindForm } from 'components/Form/Form';
import { useEffect, useState } from 'react';
import { requestSearchFilms } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmsNames, setFilmsNames] = useState(null);
  const value = searchParams.get('name') ?? '';

  useEffect(() => {
    async function updateFilmsNames() {
      if (!value) {
        setFilmsNames(null);
        return;
      }
      const filmsArray = await requestSearchFilms(value);
      setFilmsNames(filmsArray);
    }

    updateFilmsNames();
  }, [value]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <h2>Find movies</h2>
      <FindForm handleChange={updateQueryString} />
      {filmsNames && <FilmList filmsNames={filmsNames} />}
    </>
  );
};
export default Movies;
