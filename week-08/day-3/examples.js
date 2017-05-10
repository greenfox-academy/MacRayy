'use strict'

const numbers = [1,2,3,4,5];
const numbersWithString = ['alma', 1,2,3,4,5];

let doubleNumbers = numbers.map(function(num) {
    return num *2;
});

console.log(doubleNumbers);
// a map csinal egy uj listat es minden elemet beletolt egy uj listaba a megadott feltetelek alapjan

let bigger = numbers.filter(function(num) {
    return num > 2;
})

console.log(bigger);

let onlyNumbers = numbersWithString.filter(function(num) {
    return num * 2;
}) // megnezi hogy mi szorozhato kettovel.

console.log(onlyNumbers);
// filter csinal egy uj listat a megadott feltetel alapjan.
// kb mint egy for ciklus amiben van egy if statement.
