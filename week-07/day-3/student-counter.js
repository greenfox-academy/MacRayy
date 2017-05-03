'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
];

// create a function that takes a list of students and logs:
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function countCandies(students) {
    var totalCandies = 0;
    students.forEach(function(student) {
        totalCandies += student.candies;
    })
    return totalCandies;
}

console.log(countCandies(students));

function sumAge(students) {
    var totalAge = 0;
    students.forEach(function(student) {
        if (student.candies < 5) {
            totalAge += student.age;
        }
    })
    return totalAge;
}
console.log(sumAge(students));
