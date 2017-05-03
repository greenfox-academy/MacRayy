'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
    arguments.toString();
    var argsList = [];
    for (var args = 0; args < arguments.length; args++) {
        argsList.push(arguments[args])
    }
    return argsList.toString();
}

console.log(printer('one', 'two', 3, true));

// console.log(Object.keys(car));
