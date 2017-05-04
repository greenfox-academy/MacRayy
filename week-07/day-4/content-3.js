'use strict'
// fill output1 with the first paragraph's content, text only.
// fill output2 with the first paragraph's content keeping the cat strong.

var firstParagraph = document.querySelector('p');
var secondParagraph = document.querySelector('.output1');
var thirdParagraph = document.querySelector('.output2');

secondParagraph.innerHTML = firstParagraph.innerText;
thirdParagraph.innerHTML = firstParagraph.innerHTML;
