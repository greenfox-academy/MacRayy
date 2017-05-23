'use strict'

var alma = 4;

function printAlma() {
    console.log(alma);
}
printAlma();
alma = 8;
printAlma();
// fuggveny eleri az alma valtozot

var printers = [];
for (var i = 0; i < 10; i++) {
    printers.push(function() {
        console.log(i);
    });
}

printers[4](); //eddigre az i erteke 10, ha let lenne akkor 4-et kapnank | tomb elemei fuggvenyek, ezert lehet utana zarijellel meghivni
console.log(printers);

function getCounter () {
    var count = 0;
    return function() {
        count++;
        console.log(count);
    }
}
var counter0 = getCounter();
counter0;
counter0;
counter0;

var counter1 = getCounter();
counter1()
//ketszer hozza letre a getCounter fuggvenyt
//olyan mintha peldanyositana closure === peldany



function createCounterN(start) {
    return function() {
        start++;
        console.log(start);
    }
}

var counterFrom4 = createCounterN(4);
var counterFrom8 = createCounterN(8);

counterFrom4();
counterFrom4();
counterFrom4();

counterFrom8();
counterFrom8();
counterFrom8();
