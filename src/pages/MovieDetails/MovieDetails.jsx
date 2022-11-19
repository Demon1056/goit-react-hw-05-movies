import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { MainDatails } from 'components/MainDatails/MainDatails';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { GoBackLink } from './MovieDatails.Styled';
import { requestMoviesDatails } from 'Api';

const MovieDetails = () => {
  const [filmsDatails, setFilmsDatails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    async function updateFilmsDatails() {
      try {
        Loading.arrows({ svgColor: ' rosybrown' });
        const details = await requestMoviesDatails(movieId, controller.signal);
        setFilmsDatails(details);
      } catch (error) {
        console.error();
      } finally {
        Loading.remove();
      }
    }
    updateFilmsDatails();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLink}>Go back</GoBackLink>
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
