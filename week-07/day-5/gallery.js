'use strict'

var imageList = [
    {imgSrc: 'img/metropolis.jpg',
    title: 'Metropolis',
    description: 'some text to desctibe the image'},
    {imgSrc: 'img/sunset.jpg',
    title: 'Sunset Boulevard',
    description: 'some text to desctibe the image'},
    {imgSrc: 'img/kingkong.jpg',
    title: 'King Kong',
    description: 'some text to desctibe the image'}
];

var mainImage = document.querySelector('main--image');
var mainImageSrc = mainImage.getAttribute('src');
