export const MainDatails = ({ filmsDatails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    filmsDatails;

  const getGenres = genres => {
    const filmsGenres = genres.map(({ name }) => name);
    return filmsGenres.join(', ');
  };

  return (
    <div>
      {' '}
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div>
        <h3>
          {title} ({release_date})
        </h3>
        <p>User Score: {vote_average} %</p>
        <p>Overview</p>
        <br />
        <p>{overview}</p>
        <p>Genres</p>
        <br />
        <p>{getGenres(genres)}</p>
      </div>
    </div>
  );
};
