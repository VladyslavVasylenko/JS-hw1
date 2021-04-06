"use strict";

const statistic = {
  positive: 0,
  negative: 0,
  zero: 0,
  even: 0,
  odd: 0,
  numbers: []
};

const maxNumbers = 10;

for (let i = 0; i < maxNumbers; i++ ) {
  const number = +prompt('Enter number');
  
  if (isNaN(number)) {
    continue;
  }

  if (number < 0) {
    statistic.negative = statistic.negative + 1;
  } else if (number > 0) {
    statistic.positive = statistic.positive + 1;
  } else {
    statistic.zero = statistic.zero + 1;
  }

  if (number % 2 === 0) {
    statistic.even = statistic.even + 1;
  } else {
    statistic.odd = statistic.odd + 1;
  }

  statistic.numbers.push(number);

  let result = statistic;
}

document.getElementById("result-first").innerHTML = 'Number of positive number: ' + statistic.positive + '.';
document.getElementById("result-second").innerHTML = 'Number of negative number: ' + statistic.negative + '.';
document.getElementById("result-three").innerHTML = 'Number of zero number: ' + statistic.zero + '.';
document.getElementById("result-four").innerHTML = 'Number of odd number: ' + statistic.odd + '.';
document.getElementById("result-five").innerHTML = 'Number of even number: ' + statistic.even + '.';
document.getElementById("result-six").innerHTML = 'Your numbers: ' + statistic.numbers + '.';

console.log(statistic);