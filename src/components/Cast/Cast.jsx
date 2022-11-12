import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = ({ requestCast }) => {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    async function gerCast() {
      const c = await requestCast(movieId);
      setCast(c);
    }
    gerCast();
  }, []);
  const { movieId } = useParams();
  const createMarcketCast = cast => {
    const a = cast.map(({ name, character, id, profile_path }) => {
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
    return a;
  };
  return <>{cast && <div>{createMarcketCast(cast)}</div>}</>;
};
export default Cast;
