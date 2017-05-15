'use strict'
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

let areAnagramms = function(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;

    this.anagrammLength = function() {
        if (this.word1.length === this.word2.length) {
            this.anagrammLetters();
        } else {
            return false;
        }
    }

    this.anagrammLetters = function() {
        let wordList1 = [];
        let wordList2 = [];
        wordList1 = this.word1.split('').sort();
        wordList2 = this.word2.split('').sort();
        let sortedword1 = wordList1.join();
        let sortedeord2 = wordList2.join();

        if (sortedword1 === sortedeord2) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = areAnagramms;
