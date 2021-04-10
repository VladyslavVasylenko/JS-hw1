"use strict";

const obj = {
  numerator: 5,
  denominator: 2,
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
};

console.log(obj.additions(), obj.subtraction(), obj.multiplication(), obj.dividing());

function reduceFrac(a, b) {
  let divider = nod(a, b);
  return {n: a/divider, d: b/divider};
}

console.log(reduceFrac(obj.numerator, obj.denominator));