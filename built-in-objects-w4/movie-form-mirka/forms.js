
var loginButton = document.querySelector("#button");

loginButton.onclick = function () {

    var title = document.querySelector("#titleMovie").value;
    var length = document.querySelector("#lengthMovie").value;
    var genre = document.querySelector("#genre").value;

    var genreMovie = new Genre(genre);
    var movie = new Movie(title, genreMovie, length);

    var li = document.createElement("li");
    li.className = "listOfGenre";
    li.textContent = movie.getDataToMovie();
    var ul = document.querySelector("ul");

    ul.appendChild(li);

    document.querySelector("ul");

}