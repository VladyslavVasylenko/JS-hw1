"use strict";

let userS = +prompt("Indicate your seconds: ", "");

function second (a) {
  let b = ( a / 60 / 60 );
  let c = ( a / 60);
  alert("It turned out: " + b + ':' + c + ':' + a +" hh.mm.ss");
}

second(userS);

