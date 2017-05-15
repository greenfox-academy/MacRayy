'use strict'
const test = require('tape');
const sum = require('./sum.js');

test('testWithNumbers', function(t) {
    let testSum = new sum([1, 2, 3]);
    t.equal(testSum.sumArray(), 6);
    let testSum2 = new sum([0]);
    t.equal(testSum2.sumArray(), 0)
    t.end();
});

test('testWithEmptyList', function(t) {
    let testSum = new sum([]);
    t.equal(testSum.sumArray(), 0);
    t.end();
})

test('testWithNull', function(t) {
    let testSum = new sum(null);
    t.equal(testSum.sumArray(), 'it is not a list');
    t.end();
})

test('testWithString', function(t) {
    let testSum = new sum('string');
    t.equal(testSum.sumArray(), 'it is not a list');
    t.end();
})
