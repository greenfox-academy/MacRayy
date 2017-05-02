'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var dailyCode = 6;
var semester = 17;
var weekDays = 5;
var workHoursWeekly = 52

function countCodingHours() {
    var totalCoding = dailyCode * weekDays * semester;
    console.log(totalCoding + ' hours spent with coding in a semester');
}



countCodingHours();
