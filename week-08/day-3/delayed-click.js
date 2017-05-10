'use strict'
// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed
const button = document.querySelector('button');
const body = document.querySelector('body');

let timeCounter = function() {
    setTimeout(function() {
        writeMessage();
    }, 2000);
}

let writeMessage = function() {
    let message = document.createElement('p');
    message.innerText = '2 seconds ellapsed'
    body.appendChild(message);
}

button.addEventListener('click', timeCounter);
