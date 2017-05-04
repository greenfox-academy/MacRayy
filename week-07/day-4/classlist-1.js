'use strict'

// Does the third p have a cat class?
// If so, alert 'YEAH CAT!'
// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
// If the first p has an 'apple' class, replace cat's content with 'dog'
// Make apple red
// Make balloon less balloon-like

var paragraphs = document.querySelectorAll('p');

alert(paragraphs[2].classList.contains('cat'));

if (paragraphs[3].classList.contains('dolphin')) {
    paragraphs[0].innerHTML = 'pear';
}

if (paragraphs[0].classList.contains('apple')) {
    paragraphs[0].innerHTML = 'dog';
}

paragraphs[0].classList.add('red');

paragraphs[1].style.backgroundColor = 'blue';
paragraphs[1].style.borderRadius = '5px';
