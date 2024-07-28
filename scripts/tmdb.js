import {TMDB_TOPRATING_AUTH} from './apiKeys.js';

let topRatedMovies;
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
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc', // TODO: 전체에서 가져오기, 내가 sort할 필요가 없음
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
    .then(setMovieInfo)
    .catch((err) => console.error(err));
}

const movies = document.querySelector('.movies');
function setMovieInfo() {
  // Top10 영화 카드 추가
  topRatedMovies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movieCard';
    const id = movie.id;
    movieCard.id = id;
    movies.appendChild(movieCard);

    const title = movie.title;
    const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const ratingScore = movie.vote_average.toFixed(1);
    const overview = movie.overview;

    const contentHtml = `
      <img src=${posterImage} class="posterImage">
      <div class="infoLayer">
        <p class="title">${title}</p>
        <p class="ratingScroe">⭐️ ${ratingScore}</p>
        <p class="overview">${overview}</p>
      </div>
    `;

    movieCard.innerHTML = contentHtml;
    movieCard.addEventListener('click', (event) => {
      alertID(event);
    });
  });
}

function alertID(event) {
  alert(`영화 ID: ${event.currentTarget.id}`);
}
