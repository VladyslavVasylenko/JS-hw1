var a = Number(prompt("Введите начало диапазона",""));
var n = Number(prompt("Введите конец диапазона",""));
var sum = 0;

while(a <= n){       
  sum+=a;  
  a++;
}

alert('Общая сумма: ' + sum);