"use strict";

class Marker {
  constructor(c, p){
    this.c = c;
    this.p = p;
  }

  get markerProps(){
    return [this.c, this.p];
  }

  set markerProps(newProps){
    [this.c, this.p] = [...newProps];
  }

  print(line){
    let t = document.getElementById("content");
    for (let i = 0; i < line.length; i++){
      if (this.p != 0){
        if (line[i] == " "){
          this.p += 0.5;
        }
        t.innerHTML += line[i];
        t.style.color = this.c;
        this.p -= 0.5;
      } else {
        document.write("Marker is over!");
        break;
      }
    }
  }
}

class FilledMarker extends Marker {
  fill(p){
    if (p > 100){
      p = 100;
    } else {
      this.p += p;
    }
  }
}

let marker = new FilledMarker("#191970", 5);
marker.fill(31);

const l = 'Implement a class that describes a simple marker. The class should have the following components: field that stores the color of the marker; a field that stores the amount of ink in the marker (in percent); Implement a refueling marker class by.';
marker.print(l);

document.body.setAttribute("style", "font-size:18px; text-align:center; font-family: cursive; margin-bottom:5%;");