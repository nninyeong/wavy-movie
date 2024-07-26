const searchButton = document.querySelector('.searchButton');
const searchText = document.querySelector('.searchText');
const title = document.querySelector('.title');

export function setSearchButtonEvent() {
  searchButton.addEventListener('click', searchMovies);
  title.addEventListener('click', goIndex);
}

function searchMovies() {
  const keyword = searchText.value;
  window.location.href = `./searchResult.html?keyword=${encodeURIComponent(keyword)}`;
}

function goIndex() {
  window.location.href = `./index.html`;
}
