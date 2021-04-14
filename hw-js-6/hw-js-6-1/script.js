"use strict";

const playList = [
  { author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN" },
  { author: "QUEEN", song:"BOHEMIAN RHAPSODY" },
  { author: "LYNYRD SKYNYRD", song:"FREE BIRD" },
  { author: "DEEP PURPLE", song:"SMOKE ON THE WATER" },
  { author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
  { author: "AC/DC", song:"BACK IN BLACK" },
  { author: "QUEEN", song:"WE WILL ROCK YOU" },
  { author: "METALLICA", song:"ENTER SANDMAN"},
];

let list = document.getElementById("list");
list.style.fontFamily = 'Franklin Gothic Medium';
list.style.margin = '3% 5%';

for (let i = 1; i < 9; i++) {
  let li = document.createElement('li');
  li.innerHTML = playList.author + ' : ' + playList.song;
  list.appendChild(li);
};
