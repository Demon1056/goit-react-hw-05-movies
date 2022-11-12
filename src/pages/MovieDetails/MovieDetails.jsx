import { NavItem } from 'components/Layout/LayoutStyled';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = ({ filmsRequest }) => {
  const [films, setFilms] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    async function getDatail() {
      const detail = await filmsRequest(movieId);
      setFilms(detail);
    }
    getDatail();
  }, [movieId]);

  const getGenres = detail => {
    const genres = detail.genres.map(({ name }) => name);
    return genres.join(', ');
  };

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
            <p>{getGenres(films)}</p>
          </div>
          <div>
            <p>Additional Information</p>
            <ul>
              <li>
                <Link to={`/movies/${films.id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${films.id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};
export default MovieDetails;
