'use strict';

var a = 3;
// make it bigger by 10
a += 10;

console.log(a);




var b = 100;
// make it smaller by 7
b -= 7;

console.log(b);




var c = 44;
// double c's value
c *= 2;

console.log(c);




var d = 125;
// divide d's value by 5
d /= 5;

console.log(d);




var e = 8;
// what's the cube of e's value?
e *= e;

console.log(e);




var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    console.log(f1 + ' is bigger than ' + f2)
} else {
    console.log(f1 + ' is not bigger than ' + f2)
}




var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
if (g2 * 2 > g1) {
    console.log(g2 + ' double is bigger than ' + g1);
} else {
    console.log(g2 + ' double is not bigger than ' + g1);
}



var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
if (h % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}




var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if (i1 > Math.pow(i2,2) && i1 < Math.pow(i2,3)) {
    console.log(true);
} else {
    console.log(false);
}



var j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
if (j % 3 === 0 && j % 5 === 5) {
    console.log(true);
} else {
    console.log(false);
}



var k = 'Apple';
// fill the k variable with its content 4 times
while (k !== 'AppleAppleAppleApple') {
    k += 'Apple';
}

console.log(k);
