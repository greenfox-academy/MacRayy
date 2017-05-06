'use strict'
// On the click of the button,
// Count the items in the list
// And display the result in the result element.

var listItems = document.querySelectorAll('li');
var answer = document.querySelector('.result');
var button = document.querySelector('button');

function countsListItems() {
    var counter = 0
    listItems.forEach(function(element) {
        counter++;
    });
    return counter;
}

function printsAnswer() {
    answer.innerHTML = countsListItems()
}

button.addEventListener('click', printsAnswer);
