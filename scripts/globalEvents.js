const searchButton = document.querySelector('.searchButton');
const searchText = document.querySelector('.searchText');
const logo = document.querySelector('.logo');

export function setGlobalEvents() {
  searchButton.addEventListener('click', searchMovies);
  logo.addEventListener('click', goIndex);
  searchText.addEventListener('keypress', pressEnter);
}

function searchMovies() {
  const keyword = searchText.value;
  window.location.href = `./searchResult.html?keyword=${encodeURIComponent(keyword)}`;
}

function goIndex() {
  window.location.href = `./index.html`;
}

function pressEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const keyword = searchText.value;
    window.location.href = `./searchResult.html?keyword=${encodeURIComponent(keyword)}`;
  }
}
