'use strict'

// fill every paragraph with the last one's content.

var paragraphList = document.querySelectorAll('p');
var lastParagraph = document.querySelector('.dog');

for (var p = 0; p < paragraphList.length - 1; p++) {
    paragraphList[p].innerText = lastParagraph.innerText;
}
