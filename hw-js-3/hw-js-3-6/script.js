"use strict";



let userNumberFirst = +prompt('Indicate your number: ');
let userNumberSecond = +prompt('Indicate your number: ');


function is_perfect(a,b) {
  let temp = 0;

  for(let i = 1; i <= a / 2; i++) {
    if(a%i === 0) {
      temp += i;
    }
  }
  
  if(temp === a && temp !== 0) {
    console.log("It is a perfect number: ");
    return true;
  } else {
    console.log("It is not a perfect number.");
    return false;
  }
} 


for (let i = userNumberFirst; i < userNumberSecond; i++){
  if (is_perfect(i)) {
    console.log('perfect number: ' + i);
  }
}

