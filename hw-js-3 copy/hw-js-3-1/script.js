"use strict";

let userNumFirst = +prompt("Enter the first number", '');
let userNumSecond = +prompt("Enter the second number", '');

function numbers (a,b) {

  if (a > b) {
    alert('Your result: -1 it`s mean first number greater second number');
  } else if (a < b){
    alert('Your result: 1 it`s mean second number greater first number');
  } else if (a == b){
    alert('Your result: 0 it`s mean first number equally second number');
  }
}

numbers(userNumFirst,userNumSecond);
