//10.Write object representing a book, an animal and a person. Create constructor functions for same entities.
var book = function(writer,title,gener) {
    this.writer=writer;
    this.title=title; 
    this.gener=gener;

}
var someBook= new book("George Martin","Game of Thrones","Science fiction");
console.log(someBook);

var animal = {
    race: "Dog",
    age: 7,
    name: "Dogi",

};

var person = {
    name: "Pera",
    age: 28,
    email: "pera@gmai.com",

}