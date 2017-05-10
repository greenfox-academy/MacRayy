'use strict';

// Write a program that prints apple after 3 seconds.

let printsFruit = function(fruit) {
    console.log(fruit)
};


setTimeout(printsFruit, 0, 'apple');
setTimeout(printsFruit, 2000, 'pear');
setTimeout(printsFruit, 4000, 'mango');
setTimeout(printsFruit, 6000, 'grape');
