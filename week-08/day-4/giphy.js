'use strict'
// Display gifs of a cute/funny topic using: https://github.com/Giphy/GiphyAPI
//
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF
const body = document.querySelector('body');

let controller = function() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?q=buster+keaton&api_key=dc6zaTOxFJmzC', true);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var gifList = JSON.parse(request.response);
            console.log(gifList);
            var imageList = [];
            for (let i = 0; i < 16; i++) {
                var image = gifList.data[i].images.downsized_still.url;
                imageList.push(image);
            }
            createList(gifList)
        }
    }

    let createList = function(gifList) {
        let unorderdList = document.createElement('ul');
        body.appendChild(unorderdList);
        for (let i = 0; i < 16; i++) {
            let listItem = document.createElement('li');
            listItem.style.backgroundImage = 'url(' + gifList.data[i].images.downsized_still.url + ')';
            unorderdList.appendChild(listItem)
        }
    }
}


const gifs = new controller;
