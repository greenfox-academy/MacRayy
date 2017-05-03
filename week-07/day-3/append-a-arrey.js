'use strict';
// - Create a variable named `nimals`
//   with the following content: `["kuty", "macs", "cic"]`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

function appendA(list) {
    var appendedList = [];
    appendedList = list.map(function(element){
        return element + 'a'
    });
    return appendedList
}

console.log(appendA(["kuty", "macsk", "cic", "pand"]));
