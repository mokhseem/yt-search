let page = document.querySelector('.page');
let theme = document.querySelector('.theme-btn');

theme.onclick = function () {
  page.classList.toggle('dark-theme');
};

function search () {
  let query = document.getElementById('search').value;
  query = 'https://www.youtube.com/results?search_query=' + query;
  window.location.href = query;
};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    search();
  }
});
