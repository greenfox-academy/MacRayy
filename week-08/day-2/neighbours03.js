'use strict';
// Jutka got ill. Hável the school director is looking for somebody who can teach instead of Jutka.
// Bela bacsi has free time at 8 o'clock, Bujaki at 9 o'clock, Vilma at 10 o'clock.
// The program shoul print the schedule of the teachers.

let isIll = true;

function getDeputy(hour) {
  while (isIll) {
    var deputy = '';
    if (hour === 8) {
      deputy = 'Bela bacsi';
    }
    else if (hour === 9) {
      deputy = 'Bujaki';
    }
    else if (hour === 10) {
      deputy = 'Vilma';
    }
    return deputy;
  }
}

console.log("At eight:", getDeputy(8));
console.log("At nine:", getDeputy(9));
console.log("At ten:", getDeputy(10));
