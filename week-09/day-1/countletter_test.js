'use strict'
const test = require('tape');
const countLetter = require('./countletter.js');

test('is it a string', function(t) {
    let word = new countLetter(33);
    t.equal(word.isItString(), 'it is not a word');
    t.end();
})

test('counts the letters in a string', function(t) {
    let word = new countLetter('terrier');
    t.deepEqual(word.countsLetters(), {t: 1, e: 2, r: 3, i:1, });
    t.end();
})
