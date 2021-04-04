"use strict";

let n = prompt('Your number?'); 
let divisor = [];

if (n % 1 == 0) {
  divisor.push(1);
  n=Math.round(n/1);
  let max=n/2;
  for (let i = 2; i <= max; i++) {
    if (n % i == 0) {
      divisor.push(1*i);
    };
  };
  divisor.push(1*n);
};

console.log(divisor);