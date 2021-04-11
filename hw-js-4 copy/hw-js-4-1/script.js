"use strict";

let car = {
  manufacturer: "Audi",
  model: "A6",
  "year of issue": 2015,
  "average speed": 80,
}

function ourCar(obj) {
  let result = "";

  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += i + " - " + obj[i] + "<br>";
    }
  }

  document.write(result);
  return result;
}

ourCar(car);

let user = +prompt('Which route to calculate: ');

function road(a){
  let speed = car["average speed"];
  let relax = 1;

  if (a / speed < 4) {
    let result = a / speed;
    document.write("No relax. " + result + " hour " + a + " km.");
  } else if (a / speed > 4) {
    let result = a / speed + relax;
    document.write("You need " + result + " hour " + a + " km.");
  } else if (a / speed >= 8) {
    let result = a / speed + relax + 1;
    document.write("You need " + result + " hour " + a + " km.");
  }
}

road(user);