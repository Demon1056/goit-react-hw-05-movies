import { useEffect, useState } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { requestTrendingFilms } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';

const Home = () => {
  const [filmsNames, setFilmsNames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function updateFilmsNames() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const names = await requestTrendingFilms(controller.signal);
        setFilmsNames(names);
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
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {filmsNames && <FilmList filmsNames={filmsNames} />}
    </div>
  );
};
export default Home;
