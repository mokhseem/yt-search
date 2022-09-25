function search() {
  var t = document.getElementById("search").value;
  t = "https://www.youtube.com/results?search_query=" + t;
  window.location.href = t;
};

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    search();
  }
});
