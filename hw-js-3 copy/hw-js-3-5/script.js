"use strict";
let userNumber = +prompt('Indicate your number: ');

function is_perfect(number) {
  let temp = 0;

  for(let i = 1; i <= number / 2; i++) {
      if(number%i === 0) {
        temp += i;
      }
  }
  
  if(temp === number && temp !== 0) {
    alert("It is a perfect number.");
  } else {
    alert("It is not a perfect number.");
  }   
} 

is_perfect(userNumber);