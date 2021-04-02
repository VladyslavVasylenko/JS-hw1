let number = prompt('Введите пятиразрядное число', 0);
  number = number + '';
  if (number === number.split('').reverse().join(''))
    alert('Это число является палиндромом');
  else
    alert('Это число не является палиндромом');