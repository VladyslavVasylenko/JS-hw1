"use strict";

let userH = +prompt("Indicate your hour: ", "");
let userM = +prompt("Indicate your minutes: ", "");
let userS = +prompt("Indicate your seconds: ", "");


function timeStr(a,b,c){
  if ( c == undefined) {
    let str = `${a}:${b}:00`;
    return str;
  }
  else if ( b == undefined) {
    let str = `${a}:00:${0}`;
    return str;
  } 
  else if ( a == 0 ) {
    let str = `00:${b}:${c}`;
    return str;
  } 
  else if ( b == 0 ) {
    let str = `${a}:00:${c}`;
    return str;
  }
  else if ( c == 0 ) {
    let str = `${a}:${b}:00`;
    return str;
  } else {
    let arr = [a, b, c];
    let str = arr.join(':');
    return str;
  } 
}

console.log(timeStr(userH, userM, userS));