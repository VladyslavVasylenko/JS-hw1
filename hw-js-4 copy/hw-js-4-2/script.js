"use strict";

const obj = {
  numerator: (5, 10),
  denominator: (2, 15),
  additions: function(){
    let resultNumerator = this.numerator + this.numerator;
    let resultDenominator = this.denominator + this.denominator;
    console.log(`${resultNumerator}/${resultDenominator}`);
  },
  subtraction: function(){
    let resultNumerator = this.numerator - this.numerator;
    let resultDenominator = this.denominator - this.denominator;
    console.log(`${resultNumerator}/${resultDenominator}`);
  },
  multiplication: function(){
    let resultNumerator = this.numerator * this.numerator;
    let resultDenominator = this.denominator * this.denominator;
    console.log(`${resultNumerator}/${resultDenominator}`);
  },
  dividing: function(){
    let resultNumerator = this.numerator / this.numerator;
    let resultDenominator = this.denominator / this.denominator;
    console.log(`${resultNumerator}/${resultDenominator}`);
  },
}

console.log(obj.additions(), obj.subtraction(), obj.multiplication(), obj.dividing());

function nod (m, n) {
  var mult = 0;
  while (true) {
    if (0 == m) {
      return n << mult;
    }
    if (0 == n) {
      return m << mult;
    }
    if (1 == m || 1 == n) {
      return 1 << mult;
    }
    if (m == n) {
      return m << mult;
    }
    if (0 == (m & 1) && 0 == (n & 1)) {
      mult++;
      m >>= 1;
      n >>= 1;
    } else if (0 == (m & 1)) {
      m >>= 1;
    } else if (0 == (n & 1)) {
      n >>= 1;
    } else if (m > n) {
      m = (m-n) >> 1;
    } else {
      n = (n-m) >> 1;
    }
  }
}

function reduceFrac(a, b) {
  let divider = nod(a, b);
  return {n: a/divider, d: b/divider};
}

console.log(reduceFrac(obj.numerator, obj.denominator));