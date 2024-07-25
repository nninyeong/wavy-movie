import {topRatedMovies} from './tmdb.js';

const movies = document.querySelector('.movies');
export function setMovieInfo() {
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

    movieCard.style.backgroundImage = `url(${posterImage})`;
    const contentHtml = `
      <p class="title">${title}</p>
      <p class="ratingScroe">${ratingScore}</p>
    `;

    movieCard.innerHTML = contentHtml;
  });
}

function alertID() {}
