'use strict'
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width

function sharpie(color, width) {
    this.color = color,
    this.width = width,
    this.inkAmount = 100
}

function use() {
    this.inkAmount -= this.width
}

let redSharpie = new sharpie('red', 5);
(use.bind(redSharpie))();
console.log(redSharpie.inkAmount);
