// "use strict"
(function () {
    console.log("Hi");

    function Genre(name) {
        this.name = name;

        this.getDataToGenre = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        }
    }
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getDataToMovie = function () {
            return '\t' + this.title + ", " + this.length + " min, " + this.genre.getDataToGenre();
        }
    }
    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = 0;

        this.addMovie = function (movie) {

            this.listOfMovies.push(movie);
            this.numberOfMovies++;
        }
        this.getData = function () {

            var totalMin = 0;
            var newList = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                totalMin += this.listOfMovies[i].length;

                newList += '\t' + this.listOfMovies[i].getDataToMovie() + '\n';
            }
            // TODO toLokalString() ??? date.toDateString
            return this.date.toDateString() + ', program length from all movies: ' + totalMin + ' min\n' + newList;


        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfProgram = [];
        this.totalNumberOfMovies = 0;

        this.addProgram = function (program) {
            this.listOfProgram.push(program);
            this.totalNumberOfMovies += program.numberOfMovies;
        }
        this.getDateToFestival = function () {
            var newList = '';
            for (var i = 0; i < this.listOfProgram.length; i++) {
                newList += '\t' + this.listOfProgram[i].getData() + '\n';

            }
            return name + ' festival has ' + this.totalNumberOfMovies + ' movie titles:\n' + newList;
        }
    }

    function createMovie(movieTitle, movieLength, movieGenre) {

        var newMovie = new Movie(movieTitle, movieLength, movieGenre);
        return newMovie;
    }

    function createProgram(date) {
        var newProgram = new Program(date);
        return newProgram;
    }





    var action = new Genre('Action');
    var romance = new Genre('Romance');
    var horor = new Genre('Horor')
    console.log(action.getDataToGenre());
    var movie1 = new Movie('Titanik', romance, 240);
    var movie2 = new Movie('Terminator', action, 160);
    var movie3 = new Movie('Women in black', horor, 120);
    console.log(movie1.getDataToMovie());
    var program1 = new Program('2018/11/01');
    var program2 = new Program('2020/01/02');
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie1);
    program2.addMovie(movie3);
    console.log(program1.listOfMovies);
    console.log(program1.numberOfMovies);
    console.log(program2.listOfMovies);
    var exit = new Festival('Exit2018');
    exit.addProgram(program2);
    exit.addProgram(program1);
    console.log(exit.totalNumberOfMovies);

    // console.log(program2.getData());
    console.log(exit.getDateToFestival());


    movie4 = createMovie('Munje', 180, 'Drama');
    console.log(movie4);
    program3 = createProgram('2020/11/01');
    console.log(program3);


})();
