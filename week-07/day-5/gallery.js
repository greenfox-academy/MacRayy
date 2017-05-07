'use strict'

var imageList = [
    {url: 'img/metropolis.jpg',
    title: 'Metropolis',
    description: 'some text to desctibe the image'},
    {url: 'img/sunset.jpg',
    title: 'Sunset Boulevard',
    description: 'some text to desctibe the image'},
    {url: 'img/kingkong.jpg',
    title: 'King Kong',
    description: 'some text to desctibe the image'}
];

var mainImage = document.querySelector('.main--image');
var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');

var listIndex = 0;

function changeImgSrcLeft() {
    listIndex ++;
    for (var i = 0; i < imageList.length; i++) {
        if (i === listIndex) {
            mainImage.style.backgroundImage = 'url(' + imageList[i].url + ')';
        } else if (listIndex === imageList.length) {
            listIndex = 0;
            mainImage.style.backgroundImage = 'url(' + imageList[i].url + ')';
        }
    }
}

function changeImgSrcRight() {
    listIndex --;
    for (var i = 0; i < imageList.length; i++) {
        if (i === listIndex) {
            mainImage.style.backgroundImage = 'url(' + imageList[i].url + ')';
        }  else if (listIndex === -1) {
            listIndex = imageList.length - 1;
            mainImage.style.backgroundImage = 'url(' + imageList[imageList.length - 1].imgSrc + ')';
            // mainImage.setAttribute('src', imageList[imageList.length - 1].imgSrc);
        }
    }
}

leftButton.addEventListener('click', changeImgSrcLeft);
rightButton.addEventListener('click', changeImgSrcRight);
