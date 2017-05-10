'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.

let eLetters = fruits.map(function(fruit) {
    let eCount = 0;
    let letterList = fruit.split('')
    letterList.forEach(function(letter) {
        if (letter === 'e') {
            eCount++;
        }
    });
    return eCount;
});

console.log(eLetters);
