'use strict'
const test = require('tape');
const sum = require('./sum.js');

test('testWithNumbers', function(t) {
    let testSum = new sum([1, 2, 3]);
    t.equal(testSum.sumArray(), 6);
    t.end();
});

test('testWithEmptyList', function(t) {
    let testSum = new sum([])
    t.equal(testSum.sumArray(), 0)
    t.end();
})
