'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var totalSecondsInDay = 24 * 60 * 60;

function countsTheRemainingSeconds() {
    var remainingSeconds = totalSecondsInDay - currentSeconds - currentMinutes * 60 - currentHours * 60 * 60;
    return remainingSeconds;
}

console.log(countsTheRemainingSeconds());
