//2. Write a function that checks if the number is positive or negative.

function isPositiveNumber(number) {
    if (number >= 0) {
        return true;
    }
    if (number <= 0) {
        return false;
    }
}
console.log(isPositiveNumber(-10));