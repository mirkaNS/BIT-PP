// type - string
// strength - number
// sugar - number
// milk - boolean

// addSugar
// printInfo

function Coffee(type, strength, sugar, milk) {
    //var this = {};
    this.typeOfCoffee = type;
    this.coffeeStrength = strength;
    this.sugar = sugar;
    this.milk = milk;

    this.addSugar = function () {
        this.sugar++;
    };

    this.printInfo = function () {

        console.log("Our coffee is: " + this.typeOfCoffee);

        // this.coffeeStrength
        // 1 ili 2 --> weak 
        // 3 ili 4 --> regular
        // 5 ili 6 --> strong

        switch (this.coffeeStrength) {
            case 1:
            case 2:
                console.log("Weak coffee");
                break;
            case 3:
            case 4:
                console.log("Regular coffee");
                break;
            case 5:
            case 6:
                console.log("Strong coffee");
                break;

        }
        // > 2 sweet coffee

        if (this.sugar > 2) {
            console.log("Super sweet coffee");
        } else {
            console.log("Not so sweet coffee");
        }

        var milkMessage;
        milkMessage = (this.milk == true) ? "With milk." : "Without milk.";

        console.log(milkMessage);
    }
}

var ourCoffee = new Coffee("mocha", 6, 1, true);
ourCoffee.printInfo();
ourCoffee.addSugar();

//Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
//12345 -> 54321

/*function result(number) {
    var newNumber = "";
    
    for (var i = number.length - 1; i >= 0; i--) {
        newNumber = newNumber + number[i];

    }
    return parseInt(newNumber);
}
console.log(result("1234")); */

var num = 34567;
var s = new String(num)

s.split("").reverse().join("");


// 2. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
//12345 -> 54321

function result(str) {

    var split = str.split("");
    var reverse = split.reverse();
    var join = reverse.join("");

    return join;

}

console.log(result("1234"));

/* 3.Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw” */



function sortingLetters(word) {
    var sort = word.split("");
    var alphabet = sort.sort();
    var join = alphabet.join("");

    return join;
}
console.log(sortingLetters("webmaster"));

/* 4.Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

function rearrangeLetters(letters) {
    var alphabetize = [];
    var wordSort = letters.split(" ");

    for (var i = 0; i < wordSort.length; i++) {
        var element = wordSort[i];
        alphabetize.push(element.split("").sort().join(""));


    }


    var wordJoin = alphabetize.join(" ");

    return wordJoin;
}
console.log(rearrangeLetters("Republic Of Serbia"));

/* 5. Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/

function convert(string) {
    var word = string.split(" ");
    return word;

}
console.log(convert("John Snow"));

/* 6.
Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."
*/

function abbreviated(word) {

    var newArray = [];
    var wordSort = word.split(" ");
    for (var i = 1; i < wordSort.length; i++) {
        var element = wordSort[i];
        newArray.push(element.charAt(0))
    }

    newArray.push(".");
    var wordJoin = newArray.join("");
    return wordSort[0] + " " + wordJoin;
}
console.log(abbreviated("John Snow"));


/* 7. Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
'00000000', 123, 'r' -> 12300000 */

function determinedLength(string, number, leftRight) {
    var numb2str = number.toString();
    var len = numb2str.length;
    var final = '';

    if (leftRight == "left") {
        final = string.slice(0, string.length - len) + number;

    }
    if (leftRight == "right") {
        final = number + string.slice(len, string.length);

    }

    return final;


}

console.log(determinedLength('0000', 123, 'right'));





/*  8. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises"*/

function capitalizeFirstLetter(word) {
    var wordSplit = word.split("");

    var newWord = wordSplit[0].toUpperCase();
    var wordSlice = wordSplit.slice(1);

    var wordJoin = wordSlice.join("");
    return newWord + wordJoin;

}
console.log(capitalizeFirstLetter("js string exercises"));

/*  9. Write a function to hide email addresses to protect them from unauthorized users.

"somerandomaddress@example.com" -> "somerand...@example.com"*/

function hideEmail(email) {
    var finde = email.indexOf("@");
    var result = email.slice(0, finde - 3);
    var secondPart = email.slice(finde);
    var final = result + '...' + secondPart;
    return final;
}
console.log(hideEmail("mirjana.g90@gmai.com"));



//10.Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var LOWER = 'abcdefghijklmnopqrstuvwxyz';

//"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function upperLower(string) {

    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var newLowerUppr = "";


    for (var i = 0; i < string.length; i++) {

        if (UPPER.indexOf(string[i]) != -1) {
            newLowerUppr += string[i].toLowerCase();

        }
        else {
            if (LOWER.indexOf(string[i]) != -1) {
                newLowerUppr += string[i].toUpperCase();

            }
            else {
                newLowerUppr += string[i];
            }
        }

    }

    return newLowerUppr;
}

console.log(upperLower("The Quick Brown Fox"));
