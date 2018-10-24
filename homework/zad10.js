//10.Write object representing a book, an animal and a person. Create constructor functions for same entities.
var book = function(writer,title,gener) {
    this.writer=writer;
    this.title=title; 
    this.gener=gener;

}
var someBook= new book("George Martin","Game of Thrones","Science fiction");
console.log(someBook);

var animal =function(race,age,name) {
    this.race=race;
    this.age=age;
    this.name=name;

}
var someAnimal= new animal("Dog",7,"Dogi");
console.log(someAnimal);

var person = function(name,age,email) {
    this.name=name; 
    this.age=age; 
    this.email=email; 

}
var somePerson= new person("Pera",28,"pera@gmai.com");
console.log(somePerson);