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
                this.countsLetters();
            }
        } catch(err) {
            return err.message;
        }
    }

    this.countsLetters = function() {
        let dictionary = {};
        let lettersInWord = this.word.split('')
        dictionary = lettersInWord.reduce(function (allLetters, letter) {
            if (letter in allLetters) {
                allLetters[letter]++;
            } else {
                allLetters[letter] = 1;
            }
            return allLetters;
        }, {});
        return dictionary;
    }
}

module.exports = countLetter;
