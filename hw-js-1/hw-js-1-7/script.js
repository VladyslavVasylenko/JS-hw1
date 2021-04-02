let amount = prompt('Ваша сумма заказа:');
  if (amount >=200 && amount < 300)
    alert('Сумма к оплате ' + amount/100*97 + ' скидка будет 3%');
  else if (amount >=300 && amount < 500)
    alert('Сумма к оплате ' + amount/100*95 + ' скидка будет 5%');
  else if (amount >=500)
    alert('Сумма к оплате ' + amount/100*93 + ' скидка будет 7%');
  else if (amount >=1 && amount < 200)
    alert(amount + ' к этой сумме скидка не применяется');