'use strict'
// Remove the king from the list.
// Add 3 list items saying 'The Fox' to the list.

var asteroidsList = document.querySelector('.asteroids');
var firstLi = document.querySelector('li');
asteroidsList.removeChild(firstLi);

function createListItems() {
    var newListItems = []
    for (var i = 0; i < 3; i++) {
        var newListItem = document.createElement('li');
        newListItem.innerText = 'The Fox ' + (i + 1);
        newListItems.push(newListItem);
    }
    return newListItems;
}

function addListItems(listItems) {
    for (var i = 0; i < 3; i++) {
        asteroidsList.appendChild(listItems[i]);
    }
}

addListItems(createListItems());
