'use strict';

function factorialTillLimitWithCallback(limit, callback) {
  var factorial = 1;
  for (var i = 1; i <= limit; ++i) {
    callback(factorial);
    factorial *= i;
  }
}

function callback(element) {
    console.log(element);
}

factorialTillLimitWithCallback(20, callback);

// Create a function and pass it as a parameter to the factorialTillLimitWithCallback
// function, and print all the factorial numbers till 20
