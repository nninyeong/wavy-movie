const searchButton = document.querySelector('.searchButton');
const searchText = document.querySelector('.searchText');

export function setSearchButtonEvent() {
  searchButton.addEventListener('click', searchMovies);
}

function searchMovies() {
  const keyword = searchText.value;
  window.location.href = `./searchResult.html?keyword=${encodeURIComponent(keyword)}`;
}
