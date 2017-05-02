'use strict';

// var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function drawTriange (lineCount) {
    var star = '*';
    for (var line = 1; line < lineCount + 1; line++) {
        console.log(star);
        star += '*';
    }
}

drawTriange (5);
