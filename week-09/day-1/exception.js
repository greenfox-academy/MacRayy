'use strict';

// Handle the exceptions in the addString() function. It should check the type of the
// arguments, throw the right error and write it to the console.
// It should add the strings too if the arguments are appropriate.

let addString = function(str1, str2, printStr) {
    try {
        if (typeof str1 !== 'string') {
            throw new Error (str1 + ' is not a string')
        } else if (typeof str2 !== 'string') {
            throw new Error (str2 + ' is not a string')
        } else if (typeof printStr !== 'function') {
            throw new Error (printStr + ' is not a function')
        }else {
            let newStr = str1 + str2;
            printStr(newStr);
        }
    } catch (err) {
    console.log('catching error:');
    console.log(err.message);
    }
}

let printStr = function(str) {
    console.log(str);
}

addString('f', '3', printStr);
