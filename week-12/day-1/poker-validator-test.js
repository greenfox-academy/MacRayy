'use strict';

const test = require ('tape');
const validator = require('./poker-validator.js');

test('correct number of cards in hands', (t) => {
    const validatorTest = validator('2H 3D 5S 9C KD' , '2C 3H 4S 8C AH');
    t.equal(validatorTest.getLength(), true);
    t.end();
});

test('black is royal flush', (t) => {
    const validatorTest = validator('TH JH DH KH AH' , '2C 3H 4S 8C AH');
    t.equal(validatorTest.getResult(), 'Black Wins. - with Royal Flush');
    t.end();
});
