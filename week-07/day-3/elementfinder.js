'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,7,8];

function isInList(list) {
    if (list.includes(7)) {
        return 'Hoorray';
    } else {
        return 'Noooooo';
    }
}

console.log(isInList(numbers));
