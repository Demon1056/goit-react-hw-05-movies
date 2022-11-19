import PropTypes from 'prop-types';
import {
  MainDatailsArea,
  TitleImg,
  DetailsTitle,
  MovieTitle,
  DetailsItem,
  ImgBox,
} from './MainDatails.Styled';

export const MainDatails = ({ filmsDatails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    filmsDatails;
  const releaseDate = Number.parseInt(release_date);
  const percentVoteAverage = Number.parseInt(vote_average * 10);

  const getGenres = genres => {
    const filmsGenres = genres.map(({ name }) => name);
    return filmsGenres.join(', ');
  };

  return (
    <MainDatailsArea>
      {' '}
      {poster_path ? (
        <TitleImg
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
      ) : (
        <ImgBox>Not Image Found</ImgBox>
      )}
      <div>
        <MovieTitle>
          {title} ({releaseDate})
        </MovieTitle>
        <DetailsItem> User Score: {percentVoteAverage}%</DetailsItem>
        <DetailsTitle>Overview</DetailsTitle>
        <DetailsItem>{overview}</DetailsItem>
        <DetailsTitle>Genres</DetailsTitle>
        <p>{getGenres(genres)}</p>
      </div>
    </MainDatailsArea>
  );
};

MainDatails.propTypes = {
  filmsDatails: PropTypes.object.isRequired,
};
