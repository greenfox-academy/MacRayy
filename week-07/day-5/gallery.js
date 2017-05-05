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

var mainImage = document.querySelector('.main--image');

var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');

var listIndex = 0;

function changeImgSrcLeft() {
    listIndex ++;
    for (var i = 0; i < imageList.length; i++) {
        if (i === listIndex) {
            mainImage.setAttribute('src', imageList[i].imgSrc);
        } else if (listIndex === imageList.length) {
            listIndex = 0
            mainImage.setAttribute('src', imageList[i].imgSrc);
        }
    }
}

function changeImgSrcRight() {
    listIndex --;
    for (var i = 0; i < imageList.length; i++) {
        if (i === listIndex) {
            mainImage.setAttribute('src', imageList[i].imgSrc);
        } else if (listIndex === imageList.length) {
            listIndex = 0
            mainImage.setAttribute('src', imageList[i].imgSrc);
        }
    }
}

leftButton.addEventListener('click', changeImgSrcLeft);
rightButton.addEventListener('click', changeImgSrcRight);
