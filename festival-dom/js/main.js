var $movie = document.querySelector(".movieTitle");
var $movieLength = document.querySelector(".movieLength");
var $movieGenre = document.querySelector(".selectGenre");
var $addMovie = document.querySelector(".button");
var result = 0;

$addMovie.addEventListener("click", addMovie);

function addMovie() {
  var newGenre = new Genre($movieGenre.value);
  var movie = new Movie($movie.value, newGenre, $movieLength.value);
  var text = document.querySelector(".text");
  var p = document.createElement("p");
  text.appendChild(p);
  p.textContent = movie.getDataToMovie();

  var movienumber = parseInt($movieLength.value);
  result += movienumber;

  var counter = document.querySelector(".counter");

  counter.textContent = "All movie length: " + result;
  $movieLength.value = "";
  $movie.value = "";
  $movieGenre.value = "action";
}
