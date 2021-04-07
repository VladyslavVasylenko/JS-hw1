"use strict";

let userNumberFirst = prompt('укажите первое ваше число', '');
function factorial(n){
  var result = 1;
  while(n){
    result *= n--;
  }
  return result;
}

alert( factorial(userNumberFirst) );