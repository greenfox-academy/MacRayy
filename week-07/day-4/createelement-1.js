'use strict'

// Add an item that says 'The Green Fox' to the asteroid list.
// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.

var asteroids = document.querySelector('ul');
var newAsteroid1 = document.createElement('li');
newAsteroid1.innerText = 'The Green Fox';
asteroids.appendChild(newAsteroid1);

var newAsteroid2 = document.createElement('li');
newAsteroid2.innerText = 'The Lamplighter';
asteroids.appendChild(newAsteroid2);

var body = document.querySelector('body');
var newHeading = document.createElement('header');
newHeading.innerText = 'I can add elements to the DOM!';
body.insertBefore(newHeading, asteroids);

var imgContainer = document.querySelector('.container');
var newImg = document.createElement('img');
newImg.setAttribute('src', '/Users/MrFox/OneDrive/greenfox/MacRayy/week-07/day-4/hero-down.jpg');
imgContainer.appendChild(newImg);
