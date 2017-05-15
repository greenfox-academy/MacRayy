'use strict'
const test = require('tape');
const areAnagramms = require('./anagram.js');

test('sameLength', function(t) {
    let anagramm1 = new areAnagramms('dog', 'cat');
    t.equal(anagramm1.anagrammLength(), true);
    let anagramm2 = new areAnagramms('dog', 'gold');
    t.equal(anagramm2.anagrammLength(), false);
    t.end();
});
