'use strict';

var massInKg = 84.2;
var heightInM = 1.86;

// Print the Body mass index (BMI) based on these values

function countBodyMassIindex() {
    var bodyMassIndex = massInKg / heightInM;
    return bodyMassIndex;
}

console.log('My BMI is: ' + countBodyMassIindex());
