function search () {
  let query = document.getElementById("search").value;
  query = "https://www.youtube.com/results?search_query=" + query;
  window.location.href = query;
};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    search();
  }
});
