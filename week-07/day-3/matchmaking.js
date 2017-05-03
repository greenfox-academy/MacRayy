'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bozsi","Kat","Jane"];
var boys = ["Joe","Fred","Bela","Todd","Neef","Jeff"];

function matchmaker(list1, list2) {
    var longList, shortList = [];
    if (list1.length > list2.length) {
        longList = list1;
        shortList = list2;
    } else {
        longList = list2;
        shortList = list1;
    }
    for (var element = 0; element < longList.length; element++) {
        if (element % 2 !== 0) {
            longList.splice(element, 0, shortList.shift()) // cuts the first element of the short list and pushes into the long list
        }
    }
    return longList
}

console.log(matchmaker(girls, boys));
