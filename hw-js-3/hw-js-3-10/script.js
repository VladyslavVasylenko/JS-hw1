"use strict";

/*let userFirstDate = +prompt(new Date("Indicate your date: ", "").split('-'));
let userSecondDate = +prompt(new Date("Indicate your date: ", "").split('-'));

function differenceBetweenDates (a,b) {
  a = new Date().getTime();
  b = new Date().getTime();
  let result = a - b;
  alert(result);
}

differenceBetweenDates(userFirstDate, userSecondDate);*/

var now  = +prompt("Indicate your date: ", "").split('-');
var then = +prompt("Indicate your date: ", "").split('-');
function timeLeft(a,b) {
  var diff = a - b; 

  console.log('Time remaining to ' + diff );
}

timeLeft(now,then);