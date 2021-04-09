"use strict";

let userNumberFirst = +prompt('укажите первое ваше число', '');
let userNumberSecond = +prompt('укажите второе ваше число', '');

let gcd = function(a, b) {
  if ( ! b) {
    return a;
  }

  return gcd(b, a % b);
};

console.log(gcd( userNumberFirst, userNumberSecond));