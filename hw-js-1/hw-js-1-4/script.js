"use strict";

let year = prompt('Введите любой год', 0);
  if (year%4 == 0 && (year%400 == 0 || year %100 !== 0))
  {
    alert('высокосный год');
  } else {
    alert('не высокосный год');
  }