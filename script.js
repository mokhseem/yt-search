const URL = 'https://www.youtube.com/results?search_query=';
const searchButton = document.querySelector('button');
const searchQuery = document.querySelector('#search');

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
