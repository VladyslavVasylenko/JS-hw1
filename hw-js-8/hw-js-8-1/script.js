"use strict";

let view = document.getElementById("view"),
area = document.getElementById("area");
document.body.onkeydown = keyHandler;

function keyHandler(e) {
  if (e.ctrlKey && (e.code === "Equal" || e.code === "KeyE")) {
    e.preventDefault();
    if (e.code === "Equal") {
      if (area.style.display) {
        area.style.display = "";
        view.style.display = "block";
        view.textContent = area.value;
      }
    }
      else {
      if (!area.style.display) {
        area.style.display = "block";
        view.style.display = "none";
        area.value = view.textContent;
      }
    }
  }
  if (e.code === "Escape" && area.style.display) {
    area.style.display = "";
    view.style.display = "block";
  }
}