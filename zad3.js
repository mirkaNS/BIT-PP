//3.Write a function that outputs array of every second character  from the provided string. In case that string is not provided outputs array empty array.

function secondCharacter(string1) {
    var string2 = [];
    var counter = 0;
    if (string1 == "") {
        return string2;
    } else {
        for (var i = 1; i < string1.length; i = i + 2) {
            string2[counter] = string1[i];
            counter++;

        }
    }
    return string2;
}
console.log(secondCharacter("it"));