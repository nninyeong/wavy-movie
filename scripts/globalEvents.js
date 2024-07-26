const searchButton = document.querySelector('.searchButton');
const searchText = document.querySelector('.searchText');
const logo = document.querySelector('.logo');

export function setGlobalEvents() {
  searchButton.addEventListener('click', searchMovies);
  logo.addEventListener('click', goIndex);
}

function searchMovies() {
  const keyword = searchText.value;
  window.location.href = `./searchResult.html?keyword=${encodeURIComponent(keyword)}`;
}

function goIndex() {
  window.location.href = `./index.html`;
}
