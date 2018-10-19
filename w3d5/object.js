//formiranje objekta

var breakfast = {
  drink: "coffee",
  food: "tost",
  fruit: "apple",
  timeOfMeal: function(time1, time2) {
    return time2 - time1;
  },
  print: function() {
    return this.drink + " " + this.food + " " + this.fruit;
  }
};
console.log(breakfast.print());
console.log(breakfast.timeOfMeal(10, 12));

//konstruktor funkcija

function Breakfast(ourDrink, ourFood, timeOfPreparation) {
  this.drink = ourDrink;
  this.food = ourFood;
  this.timeOfPreparation = timeOfPreparation;

  this.timeOfMeal = function(newTime1, newTime2) {
    return newTime2 - newTime1;
  };
}

var andjasBreakfast = new Breakfast("coffee", "oats", 45);
// andjasBreakfast.drink;

var t = andjasBreakfast.timeOfMeal(8, 14);

console.log(andjasBreakfast, t);
