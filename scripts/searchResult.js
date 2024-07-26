import {setGlobalEvents} from './globalEvents.js';
import {TMDB_TOPRATING_AUTH} from './apiKeys.js';
setGlobalEvents();

const params = new URLSearchParams(window.location.search);
const keyword = params.get('keyword');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TMDB_TOPRATING_AUTH,
  },
};

fetch(
  `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR`,
  options,
)
  .then((response) => response.json())
  .then((response) => showResult(response.results))
  .catch((err) => console.error(err));

const foundMovies = document.querySelector('.foundMovies');
const notFound = document.querySelector('.notFound');
function showResult(searchResult) {
  if (searchResult.length === 0 || keyword === null) {
    notFound.classList.remove('displayNone');
    return;
  }

  searchResult.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movieCard';
    movieCard.id = movie.id;
    foundMovies.appendChild(movieCard);

    const title = movie.title;
    const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const ratingScore = movie.vote_average.toFixed(1);
    const overview = movie.overview;

    movieCard.style.backgroundImage = `url(${posterImage})`;
    const contentHtml = `
          <p class="title">${title}</p>
          <p class="ratingScore">${ratingScore}</p>
          <p class="overview">${overview}</p>
      `;

    movieCard.innerHTML = contentHtml;
  });
}
