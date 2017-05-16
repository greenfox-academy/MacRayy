'use strict'

const factorio = function(number) {
    let facTotal = 1;
    for (let i = 1; i < number + 1; i++) {
        facTotal *= i;
    }
    return facTotal;
}

module.exports = factorio;
