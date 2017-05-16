'use strict'

const sum = function(number) {
    let total = 0;
    for (let i = 0; i < number + 1; i++) {
        total += i;
    }
    return total;
}

const factorio = function(number) {
    let total = 1;
    for (let i = 1; i < number + 1; i++) {
        total *= i;
    }
    return total;
}

module.exports = sum;
module.exports = factorio;
