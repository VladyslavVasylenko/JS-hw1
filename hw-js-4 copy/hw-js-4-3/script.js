"use strict";

const time = {
	currentTime: new Date(),
  addSeconds: function(seconds) {
    this.currentTime.setSeconds(this.currentTime.getSeconds() + seconds);
  },
  addMinutes: function(minutes) {
    this.currentTime.setMinutes(this.currentTime.getMinutes() + minutes);
  },
  addHours: function(hours) { 
    this.currentTime.setTime(this.currentTime.getTime() + hours);
  },
  displayTime: function() {
    console.log(this.currentTime.toLocaleTimeString('en-GB'));
  }
};

time.displayTime();
time.addSeconds(40);
time.displayTime();
time.addMinutes(10);
time.displayTime();
time.addHours(1);
time.displayTime();