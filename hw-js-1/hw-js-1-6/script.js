let amount = prompt('Enter the amount of USD:', 0);
  let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
  switch(currency) {
    case '1':
      console.log(amount*0.79 + 'EUR');
      break;
    case '2':
      console.log(amount*27.90 + 'UAH');
      break;
    case '3':
      console.log(amount*2 + 'AZN');
      break;
  }