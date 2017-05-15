'use strict'
const test = require('tape');
const areAnagramms = require('./anagram.js');

test('same Length', function(t) {
    let anagramm2 = new areAnagramms('dog', 'gold');
    t.equal(anagramm2.anagrammLength(), false);
    t.end();
});

test('same Letters', function(t) {
    let anagramm1 = new areAnagramms('dog', 'cat');
    t.equal(anagramm1.anagrammLetters(), false)
    let anagramm2 = new areAnagramms('dog', 'god');
    t.equal(anagramm2.anagrammLetters(), true)
    t.end();
});
