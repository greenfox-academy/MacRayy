'use strict'

// 1. Alert the content of the heading.
// 2. Write the content of the first paragraph to the console.
// 3. Alert the content of the second paragraph.
// 4. Replace the heading's content with 'New content'.
// 5. Replace the last paragraph's content with the first paragraph's content.

var h1List = document.getElementsByTagName('h1');
alert(h1List[0].innerText);

var firstParagraph = document.querySelector('p');
console.log(firstParagraph.innerText);

var paragraphs = document.querySelectorAll('p');
alert(paragraphs[1].innerText);

h1List[0].innerHTML = 'New content';

paragraphs[2].innerHTML = paragraphs[0].innerText;
