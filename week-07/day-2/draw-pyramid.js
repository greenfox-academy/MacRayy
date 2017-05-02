'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function drawPyramid (lineCount) {
    var space = ' ';
    var star = '*';
    for (var line = 1; line < lineCount + 1; line++) {
        console.log(space.repeat(lineCount - line) + star);
        star += '**';
    }
}

drawPyramid (5);
