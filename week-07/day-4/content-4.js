'use strict'
// replace the list items' content with items from this list:

var list = ['apple', 'banana', 'cat', 'dog'];
var listItems = document.querySelectorAll('li');

for (var el = 0; el < listItems.length; el++) {
    listItems[el].innerText = list[el];
}
