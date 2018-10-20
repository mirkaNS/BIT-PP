//6. Write a function that reverses a word or sentence. Cover cases if sentence is not provided

function reversesWordorSentence(word) {
    var newWord = "";
    if (word == "") {
        return "Sentence is not provided!"
    }

    for (var i = word.length - 1; i >= 0; i--) {
        newWord = newWord + word[i];

    }
    return newWord;
}
console.log(reversesWordorSentence("mira"));