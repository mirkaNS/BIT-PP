function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
};


function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}
Movie.prototype.getDataToMovie = function () {

    return '\t' + this.title + ", " + this.length + " min, " + this.genre.getData();
};
function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;

}

Program.prototype.addMovie = function (movie) {

    this.listOfMovies.push(movie);
    this.numberOfMovies++;
}
Program.prototype.getData = function () {

    var totalMin = 0;
    var newList = '';
    for (var i = 0; i < this.listOfMovies.length; i++) {
        totalMin += this.listOfMovies[i].length;

        newList += '\t' + this.listOfMovies[i].getDataToMovie() + '\n';
    }
    // TODO toLokalString() ??? date.toDateString
    return this.date.toDateString() + ', program length from all movies: ' + totalMin + ' min\n' + newList;


}