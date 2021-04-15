"use strict";

let timer = null, 
  counter = 0; 
const signal = Array.from(document.querySelectorAll('.signal')),
  btnStart = document.getElementById('start'),
  btnStop = document.getElementById('stop');

const init = () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  let cs = signal[(counter++) % 3]; 
  
  signal.forEach(e => e.classList[e === cs ? 'add' : 'remove'](e.dataset.light));

  timer = setTimeout(init, 5000);
};

const finish = () => {
  clearTimeout(timer); 
  
  signal.forEach(e => e.classList.remove(e.dataset.light));
  
  counter = 0;
  
  btnStart.disabled = false;
  btnStop.disabled = true;
};

btnStart.addEventListener('click', init);
btnStop.addEventListener('click', finish);