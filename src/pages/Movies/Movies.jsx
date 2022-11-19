import { useSearchParams } from 'react-router-dom';
import { FindForm } from 'components/Form/Form';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { requestSearchFilms } from 'Api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmsNames, setFilmsNames] = useState(null);
  const value = searchParams.get('name') ?? '';

  useEffect(() => {
    const controller = new AbortController();
    async function updateFilmsNames() {
      try {
        if (!value) {
          return setFilmsNames(null);
        }
        Loading.arrows({ svgColor: ' rosybrown' });
        const filmsArray = await requestSearchFilms(value, controller.signal);
        if (filmsArray.length === 0 && value) {
          Notify.failure("We didn't find any movies");
        }
        setFilmsNames(filmsArray);
      } catch (error) {
        console.error();
      } finally {
        Loading.remove();
      }
    }
    updateFilmsNames();
    return () => {
      controller.abort();
    };
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
