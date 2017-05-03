'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sumNumbers(number) {
    var total = 0;
    var digits = number.toString().split('');
    digits.forEach (function(num){
        total += parseFloat(num);
    });
    return total
}

console.log(sumNumbers(12345))
