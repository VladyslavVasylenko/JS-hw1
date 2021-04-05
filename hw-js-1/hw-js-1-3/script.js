"use strict";

let numberUzer = prompt ('Введите трёхзначное число');
let text = 'В числе не имеются повторяющихся цифр';

for (let i = 0; i < numberUzer.length; i++){
  if (numberUzer.split (numberUzer [i]).length > 2) {
    text = 'В числе имеются повторяющиеся цифры'; 
    break;
  }
}

alert (text);