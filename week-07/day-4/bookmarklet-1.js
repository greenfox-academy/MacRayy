'use strict'
// Create a script that replaces every h1 headline's content
// with 'Green Fox Academy Conquers the World'.
// Create a bookmarklet that does that on any website.

var link = document.querySelector('a');
var titleList = document.querySelectorAll('h1');

function ruleTheWorld() {
    for (var i = 0; i < titleList.length; i++) {
        titleList[i].innerHTML = 'Green Fox Academy Conquers the World';
    }
}

// link.setAttribute('href', ruleTheWorld());
