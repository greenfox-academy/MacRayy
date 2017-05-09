'use strict';
// Feri and his friend drinks two beers in a round. They order three times. How many beer do they drink?
// This code isn't working properly. The function should print: 'The result is 6'
// Could you find the appropriate types of the variables?
// Where can you invocate the function?

const person = 2;

function amountOfBeer(person) {
  let j = person;
  let result = 0;
  for (let i = 0; i <= 3; i++) {
    result = i * j;
  }
  console.log('The result is:', result);
}

amountOfBeer(person);
