'use strict'
// Turn the party on and off by clicking the button.

var body = document.querySelector('body');
var button = document.querySelector('button');

function partyOnOff() {
    if (body.classList.contains('party')) {
        body.classList.remove('party');
    } else {
        body.classList.add('party');
    }
}

button.addEventListener('click', partyOnOff);
