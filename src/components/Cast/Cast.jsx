import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { CastItem, CastImg, CastImgBox } from './Cast.Styled';
import { requestMoviesCast } from 'Api';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function UpdateCast() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const castsInformation = await requestMoviesCast(
          movieId,
          controller.signal
        );
        setCast(castsInformation);
      } catch (error) {
        console.log(error);
      } finally {
        Loading.remove();
      }
    }
    UpdateCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  const createCastMarkup = cast => {
    const markup = cast.map(({ name, character, id, profile_path }) => {
      return (
        <CastItem key={id}>
          {profile_path ? (
            <CastImg
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
            />
          ) : (
            <CastImgBox>not image found</CastImgBox>
          )}
          <p>{name}</p>
          <p>{character}</p>
        </CastItem>
      );
    });
    return markup;
  };
  return <>{cast && <ul>{createCastMarkup(cast)}</ul>}</>;
};

export default Cast;
