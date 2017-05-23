'use strict'

function greet(name) {
    console.log(name);
}

greet('joci');

var koszonesi = greet;

koszonesi('pako');

greet.robika = 4;

console.log(greet.robika);

var anonymous = function () {
    console.log('fuggveny');
};

anonymous.call(); //meghivja a fuggvenyt

;
var kecske = (function () {
    var penztarca = 5;
    var kaposzta = 6;
    console.log('nev nelkul');
    console.log(kecske); //elrejti a penztarcat valtozot, a fuggvenybol nem latszik ki
    return {
        kaposzta: kaposzta
    };
})();
// zarojel kiertekeli a fuggvenyt pl ([0,1,2])[1] -> "1"
// ez a revealing module pattern - van amit megoszt es van amit elrejt a module
