"use strict";

let userNumber = prompt("Введите число!", "");
let userStep = prompt("На сколько цифр его сдвинуть?", "");

function shift(a, b) {
  let i = a.length > 0 ? b % a.length : 0

  return a.slice(i)+a.slice(0, i);
}

console.log(shift(userNumber, userStep));

