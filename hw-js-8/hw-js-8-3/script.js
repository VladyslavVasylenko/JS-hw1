"use strict";

const pullContent = document.getElementById('content-textarea');

const resizer = document.querySelector('div.content__textarea--resizer');

const initResize = e => {
  e.preventDefault;
  window.addEventListener('mousemove', startResize);
  window.addEventListener('mouseup', stopResize);
};

const startResize = e => {
  pullContent.style.width = (e.clientX - pullContent.offsetLeft) + "px";
};

const stopResize = e => {
  window.removeEventListener('mousemove', startResize);
  window.removeEventListener('mouseup', stopResize);
};

resizer.addEventListener('mousedown', initResize);