import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesCast } from 'Api';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function UpdateCast() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const castsInformation = await requestMoviesCast(movieId);
        setCast(castsInformation);
      } catch (error) {
        console.log(error);
      } finally {
        Loading.remove();
      }
    }
    UpdateCast();
  }, [movieId]);

  const createCastMarkup = cast => {
    const markup = cast.map(({ name, character, id, profile_path }) => {
      return (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      );
    });
    return markup;
  };
  return <>{cast && <div>{createCastMarkup(cast)}</div>}</>;
};
export default Cast;
