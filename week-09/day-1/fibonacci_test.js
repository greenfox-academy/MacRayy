'use strict'
const test = require('tape');
const fibonacci = require('./anagram.js');

test('is it a number?', function(t) {
    let number = new fibonacci('');
    t.equal(number.isItNumber(), false);
    t.end();
})
