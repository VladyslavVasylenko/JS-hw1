"use strict";

const firstNumber = {
  upNumber:5,
  downNumber:10,
};

const secondNumber = {
  upNumber:2,
  downNumber:15,
};

function additions(obj1,obj2){
  if (obj1.downNumber === obj2.downNumber) {
    let resultUpNumber = obj1.upNumber + obj2.upNumber;
    let resultDownNumber = obj1.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
  } else {
    let resultUpNumber = obj1.upNumber + obj2.upNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
  }

}

additions(firstNumber,secondNumber);

function subtraction(obj1,obj2){
  if (obj1.downNumber === obj2.downNumber) {
    let resultUpNumber = obj1.upNumber - obj2.upNumber;
    let resultDownNumber = obj1.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
  } else {
    let resultFirstNumber = obj1.upNumber * obj2.downNumber;
    let resultSecondNumber = obj2.upNumber * obj1.downNumber;
    let resultUpNumber = resultFirstNumber - resultSecondNumber;
    let resultDownNumber = obj1.downNumber * obj2.downNumber;
    console.log(`${resultUpNumber}/${resultDownNumber}`);
  }

}

subtraction(firstNumber,secondNumber);

function multiplication(obj1,obj2){

  let firstNumber = obj1.upNumber * obj2.upNumber;
  let secondNumber = obj1.downNumber* obj2.downNumber;

  let resultUpNumber = firstNumber / obj1.downNumber;
  let resultDownNumber = secondNumber / obj1.downNumber;
  console.log(`${resultUpNumber}/${resultDownNumber}`);
}

multiplication(firstNumber,secondNumber);

function dividing(obj1,obj2){
  let firstNumberd = obj1.upNumber * obj2.downNumber;
  let secondNumberd = obj1.downNumber * obj2.upNumber;

  let resultUpNumber = firstNumberd / obj1.upNumber;
  let resultDownNumber = secondNumberd / obj1.upNumber;
  console.log(`${resultUpNumber}/${resultDownNumber}`);
}

dividing(firstNumber,secondNumber);

function reductions(obj1){
  let resultUpNumber = Math.round(obj1.upNumber / 2);
  let resultDownNumber =  Math.round(obj1.downNumber / 2);
  console.log(`${resultUpNumber}/${resultDownNumber}`);
}

reductions(firstNumber);