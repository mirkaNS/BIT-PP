//1. Write a function that prints all numbers between two provided numbers. 

function betweenTwoNumb(numb1, numb2) {
    var newList = [];

    for (var i = numb1; i < numb2; i++) {
        newList = newList + i + ",";
    }
    return newList;
}
console.log(betweenTwoNumb(1, 5));
