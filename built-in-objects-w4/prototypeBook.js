function Tekst(sadrzaj, autor, datum) {
    this.sadrzaj = sadrzaj;
    this.autor = autor;
    this.datum = datum;
}

function Knjiga(sadrzaj, autor, datum, izdavac, brStr) {
    Tekst.call(this, sadrzaj, autor, datum);
    this.izdavac = izdavac;
    this.brStr = brStr;
}
Knjiga.prototype = Object.create(Tekst.prototype);
Knjiga.prototype.constructor = Knjiga;
Knjiga.prototype.najKnjiga = function () {
    return "Knjige autora " + this.autor + " su najprodavanije knjige " + this.datum.getFullYear() + " godine!"
}


function NovinskiClanak(sadrzaj, autor, datum, nazivNovina, vrstaNovina) {
    Tekst.call(this, sadrzaj, autor, datum);
    this.nazivNovina = nazivNovina;
    this.vrstaNovina = vrstaNovina;
}
NovinskiClanak.prototype = Object.create(Tekst.prototype);
NovinskiClanak.prototype.constructor = NovinskiClanak;

function Blog(sadrzaj, autor, datum, url, brPosetioca) {
    Tekst.call(this, sadrzaj, autor, datum);
    this.url = url;
    this.brPosetioca = brPosetioca;
}

Blog.prototype = Object.create(Tekst.prototype);
Blog.prototype.constructor = Blog;



Tekst.prototype.isItNew = function () {

    if (this.datum >= new Date()) {
        return this.autor + ' ce objaviti knjigu ' + this.datum.getFullYear() + ' godine';
    }
    else {
        return this.autor + ' je ovo vec objavio!';
    }
}


var knjiga1 = new Knjiga("drama", "Mika Mikic", new Date("2017-03-03"), "Laguna", 1000);
// console.log(knjiga1.najKnjiga());
console.log(knjiga1.isItNew());


// var novine1 = new NovinskiClanak("turizam", "Pera Peric", new Date("2018-10-10"), "Danas", "vecernje");
// console.log(novine1);

// var blog = new Blog("putovanja", "Misa Misic", new Date("2017-06-06"), "url", 300000);

