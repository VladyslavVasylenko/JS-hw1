"use strict";

let car = {
  manufacturer: "Audi",
  model: "A6",
  "year of issue": 2015,
  "average speed": 80,
}

function ourCar() {
  let a = "Manufacturer: ";
  let b = " car model ";
  let c = " year of issue ";
  let d = " average speed ";
  
  document.write("Manufacturer: " + car[manufacturer] + " car model " + car[model] + " year of issue " + car["year of issue"] + " average speed " + car["average speed"]);
  return a,b,c,d;
}

ourCar();