"use strict";

let userNumFirst = +prompt('Your number?', ''); 
let userNumSecond = +prompt('Your number?', ''); 
let userNumThree = +prompt('Your number?', ''); 

function numbers (a,b,c) {
  let result = (' ' + a + b + c);
  let number = Number(result);
  alert('Your number: ' + number);
  console.log(typeof number);
}

numbers(userNumFirst, userNumSecond, userNumThree);
