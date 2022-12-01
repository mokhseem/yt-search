const URL = 'https://www.youtube.com/results?search_query=';
const searchQuery = document.querySelector('#search');
const themeButton = document.querySelector('.theme-button');
const searchButton = document.querySelector('.search-button');

const searchVideo = () => {
  window.open(URL + searchQuery.value);
  searchQuery.value = '';
};

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

searchButton.addEventListener('click', searchVideo);
searchQuery.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    searchVideo();
  }
});
