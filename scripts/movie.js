import {topRatedMovies} from './tmdb.js';

const movies = document.querySelector('.movies');
export function setMovieInfo() {
  // Top10 영화 카드 추가
  topRatedMovies.forEach((movie) => {
    let testCard = document.createElement('div');
    testCard.className = 'movieCard';
    movies.appendChild(testCard);
    let title = movie.title;
    let posterImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let ratingScore = movie.vote_average.toFixed(1);
    let overview = movie.overview;

    testCard.style.backgroundImage = `url(${posterImage})`;
    let contentHtml = `
      <p class="title">${title}</p>
      <p class="ratingScroe">${ratingScore}</p>
    `;
    testCard.innerHTML = contentHtml;
  });
}
