'ues strict'
const test = require('tape');

// length should be 9
// [0,0,0,4,5,6,7,8,9] => ok
// [9,0,0,4,5,6,7,8,9] => Should fail
// [1,2,3,4,5,6,7,8,9] => ok
// [2,1,3,4,5,6,7,8,9] => ok
// [9,8,7,6,5,1,2,4,9] => Should fail
// [9,8,7,6,5,1,2,4,'u'] => Should fail (non integer)

var sodokuList = [];
var sodokuList1 = [9,0,0,4,5,6,7,8,9];
var sodokuList2 = [9,0,0,4,5,6,7,8,'n'];

function validator(list) {
    if (list.length === 9) {
        list.forEach(function(element) {
            if (typeof element !== 'number') {
                throw new Error('only integers please');
            }
        });
        return true;
    } else {
        return false;
    }
}

// TEST
test('test validator is undefined', function(t) {
    t.equal(validator(sodokuList), false);
    t.end();
})

test('test length', function(t){
    t.equal(validator(sodokuList1), true);
    t.end();
})

test ('is it number?', function(t){
    t.throws(function(){
        validator(sodokuList2);
    }, Error);
    t.end();
})
