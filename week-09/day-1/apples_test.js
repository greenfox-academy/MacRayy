'use strict'
const test = require('tape');
const getApple = require('./apples')

test('returns string', function(t) {
    t.equal(getApple('apple'), 'apple');
    t.end();
});
