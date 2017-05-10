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

function greet1() {
    console.log('hallo 1');
}

function greet2() {
    console.log('szia uramr');
}

function greet3() {
    console.log('hallo 2');
}

// ASZINKRONITAS
// greet1();
// setTimeout(greet2, 3000);
// greet3();
// setTimeout(greet3, 1000);

// CALLBACK FUNCTION
function greet4(anything) { //callback function
    anything()
}

// setTimeout(greet4, 2000, greet2)
greet4(greet1)
