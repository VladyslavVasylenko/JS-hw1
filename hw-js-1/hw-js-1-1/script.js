"use strict";

let age = prompt('Сколько вам лет?', 0);
if (age >= 0 && age < 12){
  console.log('Ты ребёнок');
}
else if (age >= 12 && age < 18){
  console.log('Ты подросток');
}
else if (age >= 18 && age < 60){
  console.log('Ты взрослый');
}
else if (age >= 60){
  console.log('Вы пенсионер');
}