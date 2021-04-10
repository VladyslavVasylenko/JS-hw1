"use strict";

const time = {
  userTime: new Date(),
};

function showTime(a) {
  let result = a;
  document.write(result);
}

showTime(time.userTime);