'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function getFactorio(number) {
    var factorio = 1;
    for (var num = 1; num < number + 1; num++) {
        factorio *= num;
    }
    return factorio;
}

console.log(getFactorio(5));
