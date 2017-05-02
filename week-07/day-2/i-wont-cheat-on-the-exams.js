'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

function writesLines100Times(line) {
    for (var i = 0; i < 101; i++) {
        console.log(i + ' ' +line)
    }
}

writesLines100Times('I won\'t cheat on the exam!')
