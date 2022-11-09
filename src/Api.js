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
      'https://api.themoviedb.org/3/trending/movie/week?api_key=ab65a3b7f95e2242fd03de7b330288b7';
    const response = await axios.get(BASEURL);
    const trendingFilms = response.data.results
    return trendingFilms
  } catch (error) {
    console.log(error);
  }
}
