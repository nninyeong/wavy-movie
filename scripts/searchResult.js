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

let foundMovieList = [];
let filteredMovieList = [];
fetch(
  `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR`,
  options,
)
  .then((response) => response.json())
  .then((response) => {
    foundMovieList = response.results;
    showResult(foundMovieList);
  })
  .catch((err) => console.error(err));

const foundMoviesSection = document.querySelector('.foundMovies');
const notFound = document.querySelector('.notFound');
function showResult(searchResult) {
  if (searchResult.length === 0 || keyword === null) {
    notFound.classList.remove('displayNone');
    return;
  }

  searchResult.forEach((movie) => {
    const movieCard = document.createElement('li');
    movieCard.className = 'movieCard';
    movieCard.id = `id_${movie.id}`;
    foundMoviesSection.appendChild(movieCard);

    const title = movie.title;
    const posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const ratingScore = movie.vote_average.toFixed(1);
    const overview = movie.overview;
    const contentHtml = `
        <img src=${posterImage} onerror="this.onerror=null; this.src='../assets/defaultImage.png';" class="posterImage">
        <div class="infoLayer">
        <p class="title">${title}</p>
        <p class="ratingScroe">⭐️ ${ratingScore}</p>
        <p class="overview">${overview}</p>
      </div>
      `;

    movieCard.innerHTML = contentHtml;
  });
}

const checkbox = document.querySelector('#defaultCheckbox');
checkbox.addEventListener('input', (event) => filterMovies(event));

function filterMovies(event) {
  if (event.currentTarget.checked) {
    // 체크박스 체크 됐을 때
    if (filteredMovieList.length === 0) {
      filteredMovieList = foundMovieList.filter((movie) => {
        const releaseDate = movie.release_date;
        if (releaseDate.length === 0) return false;

        const releaseYear = releaseDate.substring(0, 4);
        if (releaseYear !== '2024') {
          return true;
        } else {
          return false;
        }
      });
    }

    if (filteredMovieList.length === foundMovieList.length) {
      notFound.classList.remove('displayNone');
    }

    filteredMovieList.forEach((movie) => {
      const card = document.querySelector(`#id_${movie.id}`);
      card.classList.add('displayNone');
    });
  } else {
    // 체크박스 체크 해제됐을 때
    filteredMovieList.forEach((movie) => {
      const card = document.querySelector(`#id_${movie.id}`);
      card.classList.remove('displayNone');
    });

    if (foundMovieList.length !== 0) {
      notFound.classList.add('displayNone');
    }
  }
}
