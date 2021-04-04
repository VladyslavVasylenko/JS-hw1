"use strict";

let a = Number(prompt("Введите начало диапазона",""));
let n = Number(prompt("Введите конец диапазона",""));
let sum = 0;

while(a <= n){       
  sum+=a;  
  a++;
}

alert('Общая сумма: ' + sum);