"use strict";

const time = {
  userTimeH: 1,
  userTimeM: 20,
  userTimeS: 30,
}

function showTime(a,b,c) {
  let result = a + ':' + b + ':' + c;
  document.write(result + '<br>');
}

showTime(time.userTimeH, time.userTimeM, time.userTimeS);

function timerTime (a,b,c,d) {
  let result;

  if (c <= 60) {
    let result = a + ':' + b + ':' + (d + c);
    document.write(result + '<br>');
  } 
  if (c > 60) {
    let result =  a + ':' + (b + (d - c) / 60) + ':' + (d - c);
    document.write(result + '<br>');
  }

  return result;
}

timerTime(time.userTimeH, time.userTimeM, time.userTimeS, 60);

