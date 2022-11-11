import { NavItem } from 'components/Layout/LayoutStyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ filmsRequest }) => {
  const [films, setFilms] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function getDatail() {
      const detail = await filmsRequest(movieId);
      setFilms(detail);
      // const a = films.geners.map(({ name }) => name);

      console.log(films);
    }
    getDatail();
  }, [movieId]);

  return (
    <>
      <NavItem to="/">Go back</NavItem>
      {films && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${films.poster_path}`}
            alt={films.title}
          />
          <div>
            <h3>
              {films.title} ({films.release_date})
            </h3>
            <p>User Score: {films.vote_average} %</p>
            <p>Overview</p>
            <br />
            <p>{films.overview}</p>
            <p>Genres</p>
            <br />
            <p>{}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
// { poster_path, title, release_date, popularity, overview, genres }
