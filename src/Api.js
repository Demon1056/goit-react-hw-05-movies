import axios from 'axios';

// export async function searchFilms() {
//   try {
//     const BASEURL = 'https://pixabay.com/api/';
//     let requestParams = {
//       params: {
//         q: value,
//         page: currentPage,
//         key: '29803921-0264c7261e6b7092956a87835',
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: 12,
//       },
//     };
//     const response = await axios.get(BASEURL, requestParams);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
export async function getTrendingFilms() {
  try {
    const BASEURL =
      'https://api.themoviedb.org/3/trending/movie/day?api_key=ab65a3b7f95e2242fd03de7b330288b7';
    const response = await axios.get(BASEURL);
    const trendingFilms = response.data.results;
    const trendingFilmsTitle = trendingFilms.map(({ title, id }) => {
      return {
        title,
        id,
      };
    });
    return trendingFilmsTitle;
  } catch (error) {
    console.log(error);
  }
}
export async function getSearchFilms(name) {
  try {
    const BASEURL = `https://api.themoviedb.org/3/search/movie?api_key=ab65a3b7f95e2242fd03de7b330288b7&language=en-US&query=${name}&page=1&include_adult=false`;
    const response = await axios.get(BASEURL);
    const trendingFilms = response.data.results;
    const trendingFilmsName = trendingFilms.map(({ title, id }) => {
      return {
        title,
        id,
      };
    });
    return trendingFilmsName;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmsById(filmId) {
  try {
    const BASEURL = `https://api.themoviedb.org/3/movie/${filmId}?api_key=ab65a3b7f95e2242fd03de7b330288b7&language=en-US`;
    const response = await axios.get(BASEURL);
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    } = response.data;
    return {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
      id,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getCast(id) {
  try {
    const BASEURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ab65a3b7f95e2242fd03de7b330288b7&language=en-US`;
    const response = await axios.get(BASEURL);
    const cast = response.data.cast;
    const castInformation = cast.map(
      ({ character, name, profile_path, id }) => {
        return {
          character,
          name,
          profile_path,
          id,
        };
      }
    );
    return castInformation;
  } catch (error) {
    console.log(error);
  }
}

export async function getReviews(id) {
  try {
    const BASEURL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ab65a3b7f95e2242fd03de7b330288b7&language=en-US&page=1`;
    const response = await axios.get(BASEURL);
    const a = response.data.results.map(({ author, content, id }) => {
      return {
        id,
        author,
        content,
      };
    });

    return a;
  } catch (error) {
    console.log(error);
  }
}
