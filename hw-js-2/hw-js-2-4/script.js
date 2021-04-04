"use strict";

let userNumber = prompt('Your number?', '');

/*console.log(String(userNumber).length);*/

function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

console.log(numDigits(userNumber));
