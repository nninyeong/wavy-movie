import {TMDB_TOPRATING_AUTH} from './apiKeys.js';

export let topRatedMovies;
const SORT_OPTION = 'vote_average'; // 영화 정렬 기준

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TMDB_TOPRATING_AUTH,
  },
};

export function fetchFromTMDB() {
  return fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc',
    options,
  )
    .then((response) => response.json())
    .then((response) => {
      topRatedMovies = response['results']
        .sort((a, b) => {
          return b[SORT_OPTION] - a[SORT_OPTION];
        })
        .splice(0, 10);
    })
    .catch((err) => console.error(err));
}
