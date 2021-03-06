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

const sum = function(numList) {
    this.numList = numList;

    this.sumArray = function() {
        let summa = 0;
        try {
            if (this.numList === []) {
                return 0;
            } else if (this.numList === null || typeof this.numList === 'string') {
                throw new Error('it is not a list');
            } else {
                for (let i = 0; i < this.numList.length; i++ ) {
                    summa += this.numList[i];
                }
            }
            return summa;
        } catch (err) {
            return err.message;
        }
    };
};

module.exports = sum;
