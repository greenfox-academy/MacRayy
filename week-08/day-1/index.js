'ues strict'
const test = require('tape');

// length should be 9
// [0,0,0,4,5,6,7,8,9] => ok
// [9,0,0,4,5,6,7,8,9] => Should fail
// [1,2,3,4,5,6,7,8,9] => ok
// [2,1,3,4,5,6,7,8,9] => ok
// [9,8,7,6,5,1,2,4,9] => Should fail
// [9,8,7,6,5,1,2,4,'u'] => Should fail (non integer)

var sodokuList1 = [];
var sodokuList2 = [9,0,0,4,5,6,7,8];
var sodokuList3 = [9,0,0,4,5,6,7,8,'n'];
var sodokuList4 = [9,0,0,4,5,6,7,8,9];
var sodokuList5 = [1,0,0,4,5,6,7,8,9];

function validator(list) {
    if (list.length === 9) {
        function isItNumber(element) {
            return typeof element === 'number';
        }
        if (list.every(isItNumber) === false ) {
            throw new Error('Pls add only numbers')
        }
    } else {
        return false;
    }
}

// TEST
test('test validator is undefined', function(t) {
    t.equal(validator(sodokuList1), false);
    t.end();
})

test('test length', function(t){
    t.equal(validator(sodokuList2), false);
    t.end();
})

test ('is it number?', function(t){
    t.throws(function(){
        validator(sodokuList3);
    }, Error);
    t.end();
})

test ('only one kind of number', function(t) {
    t.equal(validator(sodokuList4), false);
    t.equal(validator(sodokuList5), true);
    t.end();
})
