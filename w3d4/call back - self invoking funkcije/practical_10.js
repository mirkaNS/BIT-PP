//1
(function (array) {
    var temp;

    temp = array[0];
    array[0] = array[array.length - 1]
    array[array.length - 1] = temp;


    console.log(array);
})([2, 3, 4]);
//2


(function (a, b) {
    console.log(a * b);
})(4, 5);
//3
(function (string) {
    var newString = "";
    var counter = 0;
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "M" || string[i] == "m") {
            newString = newString + "*";
            counter++;
        } else {
            newString = newString + string[i];
        }
    }
    result = newString + ", " + counter;
    console.log(result);
})("prograMming");

//4
function mail(name, surname) {

    function innerMail() {
        var string = "";
        string = name + "." + surname + "@gmail.com";
        return string;
    }

    return innerMail;
}

var result = mail("Vojkan", "Trojanovic");
console.log(result());
//5
function octal(num) {
    function decimal() {
        return parseFloat(num);

    }
    return decimal;
}

var result = octal(034);
console.log(result());

//6
function errorCallBack() {

    console.log("Your password is invalid");
}
function successCallBack() {

    console.log("Your password is cool");

}

function checkPass(string, error, success) {
    var isInvalid = false;
    if (string.length >= 6) {
        for (var i = 0; i < string.length; i++) {
            var broj = parseInt(string[i]);
            if (!(isNaN(broj))) {
                isInvalid = true;
                break;
            }
        }
    }
    if (isInvalid) {
        success();
    } else {
        error();
    }
}

checkPass("Jsdssd1asdasdsssd", errorCallBack, successCallBack);
//7

function checksOdd(number) {
    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

function oddArray(array, checkodd) {
    var array2 = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (checkodd(array[i])) {
            array2[j] = array[i];
            j++;
        }
    }
    console.log(array2);
}

oddArray([2, 8, 11, 4, 9, 3], checksOdd);