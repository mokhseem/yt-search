const URL = "https://www.youtube.com/results?search_query=";
const searchButton = document.querySelector('button');
const searchQuery = document.querySelector('#search');

function search() {
  window.open(URL + searchQuery.value);
  searchQuery.value = '';
}

searchButton.addEventListener('click', search);
searchQuery.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13) {
    search();
  }
});
