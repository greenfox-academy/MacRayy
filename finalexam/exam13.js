'use strict';

//13. Create a function that takes a list of strings and transforms it like:
// [
//   "aix",
//   "bjy",
//   "ckz"
// ]

const firstArray = [
    "abc",
    "ijk",
    "xyz"
]

const stringMixer = () => {
    const secondArray = [];
    let newString = '';
    for (let i = 0; i < firstArray.length; i++) {
        for (var j = 0; j < firstArray[i].length; j++) {
            newString += firstArray[j][i];
            if (newString.length === 3) {
                secondArray[i] = newString
                newString = '';
            }
        }
    }
    return secondArray;
}

console.log(stringMixer());
