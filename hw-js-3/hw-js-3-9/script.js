"use strict";

let userH = +prompt("Indicate your hour: ", "");
let userM = +prompt("Indicate your minutes: ", "");
let userS = +prompt("Indicate your seconds: ", "");

function second (a,b,c) {
  let result = ((a * 60 * 60) + (b * 60) + c);
  alert("It turned out: " + result + " seconds.");
}

second(userH, userM, userS);

