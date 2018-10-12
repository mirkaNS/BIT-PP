/* 1.
Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function u(string1, string2, br) {
  var i;
  var res = "";
  var j;
  if (br == undefined) {
    br = 0;
  }
  for (i = 0; i < br; i++) {
    res += string1[i];
  }
  res += string2;

  for (j = br; j < string1.length; j++) {
    res += string1[j];
  }
  return res;
}
console.log(u("My random string", "JS "));

/*2
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function joinEll(str) {
  var i;
  var res = "";

  for (i = 0; i < str.length; i++) {
    if (isFinite(str[i]) === true && str[i] != null) {
      res += str[i];
    }
  }
  return res;
}

console.log(joinEll([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/* 3 Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

function program(arr) {
  var i;
  var res = [];
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if (
      !isNaN(arr[i]) &&
      isFinite(arr[i]) &&
      arr[i] != false &&
      arr[i] != null
    ) {
      res[count] = arr[i];
      count++;
    }
  }
  return res;
}
console.log(program([NaN, 0, 15, false, -22, "", undefined, 47, null]));

/*4
Write a function that reverses a number. The result must be a number.*/

function reverses(num) {
  var st = "";
  var i;
  var st2 = "";
  st = st + num;
  for (i = st.length - 1; i >= 0; i--) {
    st2 += st[i];
  }
  st2 = st2 * 1;
  return st2;
}
console.log(reverses(12345));

/*5
Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function lastElement(arr, n) {
  var i;
  if (n == undefined) {
    n = 1;
  }
  var res = [];
  var count = 0;
  for (i = arr.length - n; i < arr.length; i++) {
    res[count] = arr[i];
    count++;
  }
  return res;
}
console.log(lastElement([7, 9, 0, -2, 5]));

/*6
Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]  */

function specified(times, val) {
  var i;
  var result = [];
  var counter = 0;
  if (val == undefined) {
    val = null;
  }
  for (i = 0; i < times; i++) {
    result[counter] = val;
    counter++;
  }

  return result;
}

console.log(specified(2));

/* 8
Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
*/

function find_A_Word(string, word) {
  var i;
  var result = "";
  var arr = [];
  var count = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == " " || string[i] == "," || string[i] == ".") {
      arr[arr.length] = result;
      result = "";
    } else {
      result += string[i];
    }
  }

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == word) {
      count++;
    }
  }

  return word + " was found " + count + " times";
}
console.log(find_A_Word("aa, bb, cc, dd, aa.", "aa"));

/*9
Write a function to hide email address.

"myemailaddress@bgit.rs" -> "myemail...@bgit.rs"
*/

function hideEmail(mail) {
  var i;
  var result = "";
  var et = "";
  var dots = "...";
  var afterEt = "";
  for (var i = 0; i < 5; i++) {
    result += mail[i];
  }
  result += dots;
  for (var j = result.length; j < mail.length; j++) {
    if (mail[j] === "@") {
      et += mail[j];
    }
  }
  result += et;
  for (var s = result.length; s < mail.length; s++) {
    afterEt += mail[s];
  }
  return result + afterEt;
}

console.log(hideEmail("myemailaddress@bgit.rs"));
