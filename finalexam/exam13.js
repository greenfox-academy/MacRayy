'use strict';

//13. Create a function that takes a list of strings and transforms it like:
// [
//   "aix",
//   "bjy",
//   "ckz"
// ]

const originalArray = [
    'abc',
    'ijk',
    'xyz'
];

const originalArray2 = [
    'xyz',
    'abc',
    'lmn'
];

const stringMixer = (array) => {
    const newArray = [];
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            newString += array[j][i];
            if (newString.length === 3) {
                newArray[newArray.length] = newString;
                newString = '';
            }
        }
    }
    return newArray;
};

console.log(stringMixer(originalArray));
console.log(stringMixer(originalArray2));
