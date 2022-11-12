import { NavItem } from 'components/Layout/LayoutStyled';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { requestMoviesDatails } from 'Api';
import { MainDatails } from 'components/MainDatails/MainDatails';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
const MovieDetails = () => {
  const [filmsDatails, setFilmsDatails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function updateFilmsDatails() {
      const details = await requestMoviesDatails(movieId);
      setFilmsDatails(details);
    }
    updateFilmsDatails();
  }, [movieId]);

  return (
    <>
      <NavItem to="/">Go back</NavItem>
      {filmsDatails && (
        <div>
          {' '}
          <MainDatails filmsDatails={filmsDatails} />
          <AdditionalInfo filmsDatails={filmsDatails} />
          <Outlet />
        </div>
      )}
    </>
  );
};
export default MovieDetails;
