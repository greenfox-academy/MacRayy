'use strict'
// Display gifs of a cute/funny topic using: https://github.com/Giphy/GiphyAPI
//
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF
const body = document.querySelector('body');

let controller = function() {
    createList()
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=buster+keaton&api_key=dc6zaTOxFJmzC', true);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var gif = JSON.parse(request.response);
            console.log(gif);
        }
    }

}

let createList = function() {
    let unorderdList = document.createElement('ul');
    body.appendChild(unorderdList);
    let listItemsArray = [];
    for (var i = 0; i < 16; i++) {
        let listItem = document.createElement('li');
        listItemsArray.push(listItem);
    }
    for (var i = 0; i < 16; i++) {
        unorderdList.appendChild(listItemsArray[i])
    }
}

const gifs = new controller;
