"use strict";

let time = {
	currentTime: new Date(),
  addSeconds: function(seconds) {
    const msToAdd = seconds * 1000;
    const newTime = this.currentTime.getTime() + msToAdd;
    
    this.currentTime = new Date(newTime);
  },
  addMinutes: function(minutes) {
    const minToAdd = minutes * 60 * 1000;
    const newTime = this.currentTime.getTime() + minToAdd;
    
    this.currentTime = new Date(newTime);
  },
  addHours: function(hours) {
    const hoursToAdd = hours * 60 * 60 * 1000;
    const newTime = this.currentTime.getTime() + hoursToAdd;
    
    this.currentTime = new Date(newTime);
  },
  displayTime: function() {
    const hours = this.currentTime.getHours();
    const minutes = this.currentTime.getMinutes();
    const seconds = this.currentTime.getSeconds();
    
    console.log(`${hours}:${minutes}:${seconds}`);
  }
};

time.displayTime();
time.addSeconds(40);
time.displayTime();
time.addMinutes(10);
time.displayTime();
time.addHours(1);
time.displayTime();