'use strict';

const test = require ('tape');
const validator = require('./poker-validator.js');

test('enough cards in hands', (t) => {
    const validatorTest = validator();
    t.equal(validatorTest.getLength(), true);
    t.end();
});
