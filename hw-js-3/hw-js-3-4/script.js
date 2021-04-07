"use strict";

let lengthRect = +prompt('Specify the length of the rectangle: '); //length Rectangle
let widthRect = +prompt('Specify the width of the rectangle: ');//Width Rectangle

function square (a, b) {
  let result;

  if (result = (a * b) / 2) {
    alert("The area of the triangle is: " + result);

    return result
  } else if (result = a / 2) {
    alert("The area of the square is: " + result);

    return result
  } else if (result = b / 2) {
    alert("The area of the square is: " + result);

    return result
  }
}

square(lengthRect,widthRect);