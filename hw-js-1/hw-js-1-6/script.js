"use strict";
let amount = prompt('Enter the amount of USD:', 0);
let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);

switch(currency) {
  case '1':
    console.log(amount * 0.85 + 'EUR');
    break;

  case '2':
    console.log(amount * 27.77 + 'UAH');
    break;

  case '3':
    console.log(amount * 1.70 + 'AZN');
    break;
}