'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

let selectLastEvenNumber = function(numbers, print) {
    let evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    let num = evenNumbers.pop();
    print(num);
}

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
