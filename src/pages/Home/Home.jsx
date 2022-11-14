import { useEffect, useState } from 'react';
import { requestTrendingFilms } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const Home = () => {
  const [filmsNames, setFilmsNames] = useState([]);

  useEffect(() => {
    async function updateFilmsNames() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const names = await requestTrendingFilms();
        setFilmsNames(names);
      } catch (error) {
        console.error();
      } finally {
        Loading.remove();
      }
    }
    updateFilmsNames();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <FilmList filmsNames={filmsNames} />
    </div>
  );
};
export default Home;
