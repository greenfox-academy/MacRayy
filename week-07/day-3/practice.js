'use strict';

// FUNCTION

// // function statement
// function hello(name){
//     return name;
// }
//
// // function expression
// var bello = function() {
//     return
// }
//
// console.log(hello('Greenfox'));

function getName(){
    return 'Bond';
}

function hello(who){
    console.log('hello mr', who());
}

hello(function() {
    return 'Bond'
});

console.log(parseInt(4.56));
console.log(parseInt('99luftballon'));
console.log(parseFloat(4.56));

var myColl = [
    'hello',
    'bello',
    [1, 2, 3]
];

console.log(myColl.length);

for (var i = 0; i < myColl.length; i++) {
    console.log('YO', myColl[i]);
}

myColl.push('bello')

console.log(myColl.length);

console.log(myColl.pop()); //kiszedi az utolso elemet
console.log(myColl.shift()); //kiszedi az elso elemet
console.log(myColl.unshift('First')); //betesz egy elemet az elso helyre

console.log(myColl.indexOf('bello')); //megnezi a bello nevu idexnek a helyet

var myList = [1, 2, 3, 4];
console.log(myList.slice(1, 3));
// console.log(myList.splice(1, 3));

myList.forEach(function(el, i, fullArray) {
    console.log('num', el, i, fullArray);
}); //el.ement, i.ndex, fullArray.teljestomb
// for el in myList: <-- python verzio

var res = myList.forEach(function(el, i) {
    myList[i] = el * 2;
});
console.log(res); //forEach-nek nincs visszeterei erteke csak megduplazta a listat

var myList1 = myList.map(function(el, i) {
    return (i === 2) ? el * 2 : el; // inline if statement
});
console.log(myList1);

var myList2 = myList1.filter(function(el, i) {
    return i % 2;
}); //feltetelt lehet adni neki ami alapjan megszuri a listat
console.log(myList2);

// STRING
var str = ' this is my string    ';
console.log(str.indexOf('my'));
console.log(str.replace('my', 'your'));
console.log(str.split('').join('-')); //split listat csinal, join osszekapcsolja oket
console.log(str.substr(0, 5)); // honnan es mennyit vagjon le
console.log(str.trim());
console.log(str.endsWith(' ')) // megmondja hogy adott string mire vegzodik

// OBJECT
var car = {
    type: 'mazda',
    year: 1999,
    colors: {
        roof: 'red',
        doors: 'green'
    },
    start: function() {
        return this.type + ' ' + this.year;
    }
};
console.log(car);
console.log(car.year);
console.log(car.colors.roof);
console.log(Object.keys(car));
console.log(Object.keys(car).length);
// delete
// car.type
// console.log(car)
console.log(car.start())
