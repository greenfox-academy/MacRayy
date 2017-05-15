'use strict'
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed

let sum = function(numList) {
    this.numList = numList;

    this.sumArray = function() {
        let summa = 0;
        if (this.numList === []) {
            return 0
        } else {
            for (let i = 0; i < this.numList.length; i++ ) {
                summa += this.numList[i];
            }
        }
        return summa;
    }
}

// let array = new sum([1,2,3]);
// console.log(array.sumArray());

module.exports = sum;
