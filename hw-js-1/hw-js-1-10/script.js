let userDate = prompt('Enter the date - day-month-year ');
userDate = userDate .split('-');

let oldDate = new Date(userDate [2], userDate [1]-1, userDate [0]);
oldDate.setDate(oldDate.getDate()+1);

alert(oldDate);