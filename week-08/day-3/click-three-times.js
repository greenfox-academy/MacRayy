'use strict'
// Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times
let timeOver = false;
let clicks = 0;
const body = document.querySelector('body');
const button = document.querySelector('button');

let writeMessage = function() {
    let message = document.createElement('p');
    message.innerText = '5 seconds ellapsed and clicked 3 times'
    body.appendChild(message);
};

let timeCounter = function() {
    setTimeout(function() {
        timeOver = true;
        checkState();
    }, 5000);
};

let checkState = function() {
    if (clicks >= 3 && timeOver) {
        writeMessage();
    }
};

let addClicks = function() {
    clicks++;
    checkState();
}

timeCounter();

button.addEventListener('click', addClicks);
