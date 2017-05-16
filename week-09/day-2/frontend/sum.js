'use strict'

const sum = function(number) {
    let sumTotal = 0;
    for (let i = 0; i < number + 1; i++) {
        sumTotal += i;
    }
    return sumTotal;
}

module.exports = sum;
