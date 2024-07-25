let topRatedMovies;
const SORT_BY = 'vote_average'; // 영화 정렬 기준
import {TMDB_TOPRATING_AUTH} from './apiKeys.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TMDB_TOPRATING_AUTH,
  },
};

fetch(
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc',
  options,
)
  .then((response) => response.json())
  .then((response) => {
    topRatedMovies = response['results']
      .sort((a, b) => {
        return b[SORT_BY] - a[SORT_BY];
      })
      .splice(0, 10);
  })
  .then(setMovieInfo)
  .catch((err) => console.error(err));

const movies = document.querySelector('.movies');
function setMovieInfo() {
  // Top10 영화 카드 추가
  topRatedMovies.forEach((movie) => {
    let testCard = document.createElement('div');
    testCard.className = 'movieCard';
    movies.appendChild(testCard);
    let title = movie.title;
    let posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let ratingScore = movie.vote_average;
    let overview = movie.overview;

    testCard.style.backgroundImage = `url(${posterImage})`;
    let contentHtml = `
      <p class="title">${title}</p>
      <p class="ratingScroe">${ratingScore}</p>
    `;
    testCard.innerHTML = contentHtml;

    console.log(title, ratingScore, overview, posterImage);
  });
}
