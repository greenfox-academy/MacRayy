'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function getName(students) {
    var names = [];
    students.map(function(student) {
        if (student.candies > 4) {
            names.push(student.name)
        }
    })
    return names;
}

console.log(getName(students));

function averageCandies(students) {
    var average = 0;
    var totalCandies = 0;
    students.forEach(function(student) {
        totalCandies += student.candies
    })
    average = totalCandies / students.length;
    return average;
}

console.log(averageCandies(students));
