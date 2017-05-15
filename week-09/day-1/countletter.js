'use strict'
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

let countLetter = function(word) {
    this.word = word;

    this.isItString = function() {
        try {
            if (typeof this.word !== 'string') {
                throw new Error('it is not a word')
            } else {
                countsLetters();
            }
        } catch(err) {
            return err.message
        }
    }

    this.countsLetters = function() {
        return true;
    }
}

module.exports = countLetter;
