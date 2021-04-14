"use strict";
document.getElementsByClassName('button')[0].addEventListener('click', open);
function open(){
  alert('Very interesting homework for me.');
}

document.getElementsByClassName('buttonOne')[0].addEventListener('click', mModal);
function mModal (){
  alert('Very interesting homework for me.');
}

let modal = document.getElementById('myModal');

let btn = document.getElementById("myBtn");

let closed = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


closed.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}