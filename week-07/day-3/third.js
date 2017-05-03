'use strict';
// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`

var magicNumbers = [1, 3, 5, 7, 9, 11, 13, 15];

console.log(magicNumbers[2]);

function everyThird(magicNumbers) {
    var thirdList = [];
    for (var i = 0; i < magicNumbers.length; i++) {
        if (i % 2 === 0) {
            thirdList.push(magicNumbers[i]);
        }
    }
    return thirdList;
}

console.log(everyThird([1, 3, 5, 7, 9, 11, 13, 15]))
