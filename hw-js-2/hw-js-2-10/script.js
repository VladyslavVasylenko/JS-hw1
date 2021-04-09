"use strict";
function send() {
  let n, pcNum, out, tempOut;

  pcNum = Math.floor(( Math.random() * 100 ) + 1);
  tempOut = document.getElementById( 'temp-out' );
  tempOut.innerHTML = pcNum;
  

  n = document.getElementById( 'userNum' ).value;
  out = document.getElementById( 'out' );

  if (pcNum < n) {
    out.innerHTML = 'pc indicated a number less than yours';
  }
  if (pcNum > n) {
    out.innerHTML = 'pc indicated a number greater than yours';
  } 
  if (pcNum == n) {
    out.innerHTML = 'pc guess your number' + number;
  }
}

/*Проблема с этим заданием не понял до конца как можно 
выполнить условие, по этому решил выполнить хотя бы так.*/
