//4.Write a function that checks if the first and the last element in the array or string are the same.

function ifFirstAndLastAreSame(array1) {

    for (var i = 0; i < array1.length; i++) {
        if (array1[0] == array1[array1.length - 1]) {
            return true;
        }
    }
    return false;
}
console.log(ifFirstAndLastAreSame([1, 3, 3, 1]));