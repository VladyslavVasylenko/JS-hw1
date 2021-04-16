"use strict";

class Ring {
  constructor(ray){
    this.ray = ray;
  }

  get radius(){
    return this.ray;
  }

  set radius(ray){
    this.ray = ray;
  }

  get diameter(){
    return this.ray * 2;
  }

  area(){
    return Math.PI * this.ray * this.ray;
  }

  circumference(){
    return Math.PI * this.ray * 2;
  }
}

let ring = new Ring(5);
console.log(ring.radius);
console.log(ring.diameter);
console.log(ring.area().toFixed(2));
console.log(ring.circumference().toFixed(2));