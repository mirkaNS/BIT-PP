

var array = [3, 8, 11, 24, 6];
var index = "a";
try {
    if (typeof index == "number") {
        console.log(array[index]);

    } else {
        var TypeError = new Error("TypeError");
        throw TypeError;
    }
    if (index < 0 || index > array.length) {
        var RangeError = new Error("RangeError");
        throw RangeError;
    } else {
        console.log(array)
    }

} catch (error) {

    console.log(error.message);

}




