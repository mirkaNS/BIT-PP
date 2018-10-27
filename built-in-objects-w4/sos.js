//1 Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true
// Input: “1bser9re”
// Output: false

function checkIfContainDigit(inputString) {
    if (inputString.indexOf("5") >= 0) {

        return true
    }
    else {
        return false
    }
}
console.log(checkIfContainDigit("1b89abd"));

//2 Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function replaceString(string) {

    var find = "JS";
    return string.replace(find, "**");

}
console.log(replaceString("Programming in JS is super interesting!"));

//3.Write a function that inserts a given character on a given position in the string.
//Input: “Goo morning”, 4, ‘d’ 
//Output: “Good morning” 

function insertsCharacter(string, index, element) {
    var inputString = string.slice(0, index - 1) + element + string.slice(index - 1, string.length);
    return inputString;
}
console.log(insertsCharacter("Goo morning", 4, "d"));

//4.Write a function that deletes a character from the given position in the string. 
//Input: “Goodd morning!”, 3 
//Output: “Good morning!” 

function deletesCharacter(string, index) {
    var find = string.charAt(index);
    return string.replace(find, "");
}

console.log(deletesCharacter("Goodd morning!", 3));

//5.Write a function that deletes every second element of the given array.
//Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
//Output: [3, 1, 90, 23, 67]

function deletesSecondElement(array) {

    for (var i = 0; i < array.length; i++) {
        array.splice(i + 1, 1);

    }
    return array;
}
console.log(deletesSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//6.Write a function that replaces the elements of the given array between two positions with their doubled values. 
//Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
//Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function replacesWhitDoubledValues(array, index, index2) {
    result = [];
    for (var i = 0; i < array.length; i++) {
        result = array.slice(index, index2);
        var newResult = r
    }
    return newResult;
}
console.log(replacesWhitDoubledValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));




