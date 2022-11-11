import { Routes, Route } from 'react-router-dom';
import { getTrendingFilms, getSearchFilms, getFilmsById } from 'Api';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/Not Found/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
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
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
