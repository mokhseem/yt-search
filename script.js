const URL = 'https://www.youtube.com/results?search_query=';
const searchQuery = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

const searchVideo = () => {
  window.open(URL + searchQuery.value);
  searchQuery.value = '';
};

searchButton.addEventListener('click', searchVideo);
searchQuery.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter') {
    searchVideo();
  }
});
