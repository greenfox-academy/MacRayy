'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
var insert = ' always takes longer than';

quote = quote.substring(0, 20) + insert + quote.substring(20);

console.log(quote);
