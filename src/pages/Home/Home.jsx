import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = ({ getTrendingFilms }) => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function updateTrendingFilms() {
      const films = await getTrendingFilms();
      setTrendingFilms(films);
      console.log(films);
    }
    updateTrendingFilms();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
