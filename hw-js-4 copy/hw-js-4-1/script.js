

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

function road(distance){
  let a = distance;
  let speed = car["average speed"];
  let relax = 1;
  if (a / speed < 4) {
    document.write("No relax. ");
  }
  if(a / speed > 4 ){
    let result = a / speed + relax;
    document.write("You need " + result + " hour " + user + " km.");
  } 
  else if(a / speed >= 10){
    result = a / speed + (1 * 2);
    document.write("You need " + result + " hour " + user + " km.");
  }
}

road(user);