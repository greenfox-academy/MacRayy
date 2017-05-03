'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var abc = ['Arthur', 'Boe', 'Chloe'];
console.log(abc.reverse());

var cba = []
abc.forEach(function(el){
    cba.unshift(el);
})

console.log(cba);
