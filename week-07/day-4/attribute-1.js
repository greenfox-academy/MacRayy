'use strict'

// Write the image's url to the console.
// Replace the image with a picture of yourself.
// Make the link point to the Green Fox Academy website.
// Disable the second button.
// Replace its text with 'Don't click me!'.

var img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute('src', '/Users/MrFox/OneDrive/greenfox/MacRayy/week-07/day-4/hero-down.jpg');

var link = document.querySelector('a');

link.setAttribute('href', 'https://www.greenfoxacademy.com/');

var button = document.querySelector('.this-one');

button.innerText = 'Don\'t click me';
