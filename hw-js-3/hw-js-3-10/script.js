"use strict";

function userDate () {
  let secondA = Date.parse('2022.04.09')/1000;
  let secondB = Date.parse('2021.04.06')/1000;
  console.log('First date - ' + secondA + ' Second date - ' + secondB);

  let result = secondA - secondB;
  console.log(result);

  let b = ( result  / 60 / 60 );
  let c = ( result  / 60);
  console.log("It turned out: " + b + ':' + c + ':' + result +" hh.mm.ss");
}

userDate();