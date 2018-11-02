var createMovie = document.querySelector("#createMovie");
//var allMovieLength = 0;

createMovie.onclick = function () {
    var title = document.querySelector("#title").value;
    var movieLength = document.querySelector("#length").value;
    var genreValue = document.querySelector("#genre").value;

    var genre = new Genre(genreValue);

    var movie = new Movie(title, genre, movieLength);

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = movie.getDataToMovie();
    var ul = document.querySelector('#movieList');

    ul.appendChild(li);
    document.querySelector('#movieList').reset();

    // allMovieLength += parseInt(newLength);
    // document.querySelector('#lengthSum').innerHTML = 
}











