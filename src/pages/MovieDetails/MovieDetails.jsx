import { NavItem } from 'components/Layout/LayoutStyled';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { requestMoviesDatails } from 'Api';
import { MainDatails } from 'components/MainDatails/MainDatails';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const MovieDetails = () => {
  const [filmsDatails, setFilmsDatails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function updateFilmsDatails() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const details = await requestMoviesDatails(movieId);
        setFilmsDatails(details);
      } catch (error) {
        console.error();
      } finally {
        Loading.remove();
      }
    }
    updateFilmsDatails();
  }, [movieId]);

  return (
    <>
      <NavItem to={backLink}>Go back</NavItem>
      {filmsDatails && (
        <div>
          {' '}
          <MainDatails filmsDatails={filmsDatails} />
          <AdditionalInfo filmsDatails={filmsDatails} />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};
export default MovieDetails;
