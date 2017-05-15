'use strict'
// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

let areAnagramms = function(word1, word2) {
    this.word1 = word1;
    this.word2 = word2;

    this.anagrammLength = function() {
        if (this.word1.length === this.word2.length) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = areAnagramms;
