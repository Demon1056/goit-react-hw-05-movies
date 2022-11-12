import { Routes, Route } from 'react-router-dom';
import {
  getTrendingFilms,
  getSearchFilms,
  getFilmsById,
  getCast,
  getReviews,
} from 'Api';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/Not Found/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home getTrendingFilms={getTrendingFilms} />} />
        <Route
          path="movies"
          element={<Movies getFilmsByName={getSearchFilms} />}
        />
        <Route
          path="movies/:movieId"
          element={<MovieDetails filmsRequest={getFilmsById} />}
        >
          <Route path="cast" element={<Cast requestCast={getCast} />} />
          <Route path="reviews" element={<Reviews getReviews={getReviews} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
