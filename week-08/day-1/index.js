'ues strict'
const tape = require('tape');

// [0,0,0,4,5,6,7,8,9] => ok
// [9,0,0,4,5,6,7,8,9] => Should fail
// [1,2,3,4,5,6,7,8,9] => ok
// [2,1,3,4,5,6,7,8,9] => ok
// [9,8,7,6,5,1,2,4,9] => Should fail
// [9,8,7,6,5,1,2,4,'u'] => Should fail (non integer)
