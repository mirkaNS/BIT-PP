//8.Write a function that sets some global variable to the new value.

var number = 8;

function setGlobalValue() {

    number = number + 10;
    return number
}
console.log(setGlobalValue(number));