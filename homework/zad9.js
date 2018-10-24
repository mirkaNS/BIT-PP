//9. Write a function that replaces all white spaces from string with dash (-). 

function replaces(array) {
    var newArray = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== " ") {
            newArray += array[i];
        }
        else {
            newArray += '-';
        }
    }
    return newArray;
}
console.log(replaces("mira voli sarmu!"));