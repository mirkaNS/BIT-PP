
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

