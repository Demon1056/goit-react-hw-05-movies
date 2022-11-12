import { useEffect, useState } from 'react';
import { requestTrendingFilms } from 'Api';
import { FilmList } from 'components/FilmList/FilmList';

const Home = () => {
  const [filmsNames, setFilmsNames] = useState([]);

  useEffect(() => {
    async function updateFilmsNames() {
      const names = await requestTrendingFilms();
      setFilmsNames(names);
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
