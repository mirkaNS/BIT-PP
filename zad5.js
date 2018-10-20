//5. Write a function that checks if the two arrays are equal.
function ifTwoArrayAreEqual(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
console.log(ifTwoArrayAreEqual([1, 2, 3, 4], [1, 2, 3, 4]));