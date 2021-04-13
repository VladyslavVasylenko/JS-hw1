"use strict";

const audAcadem = [
  { id: 1, itemTab: 'Audience name', itemAud: 231, numSeats: 12, itemFaculty:"Web",},
  { id: 2, itemTab: 'Audience name', itemAud: 251, numSeats: 15, itemFaculty:"Designer",},
  { id: 3, itemTab: 'Audience name', itemAud: 271, numSeats: 20, itemFaculty:"Developer",},
  { id: 4, itemTab: 'Audience name', itemAud: 131, numSeats: 10, itemFaculty:"Web",},
  { id: 5, itemTab: 'Audience name', itemAud: 151, numSeats: 13, itemFaculty:"Designer",},
  { id: 6, itemTab: 'Audience name', itemAud: 171, numSeats: 18, itemFaculty:"Developer",},
  { id: 7, grupsName:'D1', studens:'15', itemFacult:"Developer", itemTab: 'Audience name', itemAud1: 271,  itemAud2: 171,},
  { id: 8, grupsName:'W1', studens:'10', itemFacult:"Web", itemTab: 'Audience name', itemAud1: 231, itemAud2: 131,},
  { id: 9, grupsName:'Des1', studens:'12', itemFacult:"Designer", itemTab: 'Audience name', itemAud1: 251, itemAud2: 151,},
];

//shows Audience name
function audience() {
  for(const info of audAcadem) {
    console.log (`${info.itemTab}, ${info.itemAud}`);
  }
  console.log("\n");
};

audience();

//shows classroom names based on faculty name
let userFaculty = prompt('Your faculty? ', '');

function faculty(a){
  if (a == "Developer") {
    let user = audAcadem.find(item => item.id == 3);
    console.log('Your ' + user.itemTab + ' ' + user.itemAud + ' faculty: ' + user.itemFaculty);
  }
  if (a == "Web") {
    let user = audAcadem.find(item => item.id == 1);
    console.log('Your ' + user.itemTab + ' ' + user.itemAud + ' faculty: ' + user.itemFaculty);
  }
  if (a == "Designer") {
    let user = audAcadem.find(item => item.id == 2);
    console.log('Your ' + user.itemTab + ' ' + user.itemAud + ' faculty: ' + user.itemFaculty);
  } 
  else if (a !== "Web" && "Designer" && "Developer"){
    console.log('We doesn`t have this faculty.');
  }
}

faculty(userFaculty);

//Displays audiences that are appropriate for the broadcast group.
let userGrup = prompt('Your grup? ', '');

function grups(a){
  if (a == "D1") {
    let user = audAcadem.find(item => item.id == 7);
    console.log('Your grups ' + user.grupsName + ', students in a group: ' + user.studens + ', faculty: ' + user.itemFacult + ', ' + user.itemTab + ' ' + user.itemAud1 + ', ' + user.itemAud2);
  }
  if (a == "W1") {
    let user = audAcadem.find(item => item.id == 8);
    console.log('Your grups ' + user.grupsName + ', students in a group: ' + user.studens + ', faculty: ' + user.itemFacult + ', ' + user.itemTab + ' ' + user.itemAud1 + ', ' + user.itemAud2);
  }
  if (a == "Des1") {
    let user = audAcadem.find(item => item.id == 9);
    console.log('Your grups ' + user.grupsName + ', students in a group: ' + user.studens + ', faculty: ' + user.itemFacult + ', ' + user.itemTab + ' ' + user.itemAud1 + ', ' + user.itemAud2);
  } 
  else if (a !== "W1" && "Des1" && "D1"){
    console.log('We doesn`t have this grups.');
  }
}

grups(userGrup);

//sorting audiences by the number of seats
function sortingAudiences (){
  let audFi = audAcadem.find(item => item.id == 1);
  let audSc = audAcadem.find(item => item.id == 2);
  let audTr = audAcadem.find(item => item.id == 3);
  let audFr = audAcadem.find(item => item.id == 4);
  let audFv = audAcadem.find(item => item.id == 5);
  let audSx = audAcadem.find(item => item.id == 6);
  console.log('List audience: ' + '\n' + audTr.itemAud + '\n' + audSx.itemAud + '\n' + audSc.itemAud + '\n' + audFv.itemAud + '\n' + audFi.itemAud + '\n' + audFr.itemAud);
}

sortingAudiences();// от большого к меньшему

// через метод sort
audAcadem.sort(function (a, b) {
  return a.numSeats - b.numSeats;
});

console.log(audAcadem.sort(audAcadem.numSeats));




//sort for name
audAcadem.sort(function (a, b) {
  if (a.itemAud > b.itemAud) {
    return 1;
  }
  if (a.itemAud < b.itemAud) {
    return -1;
  }
  return 0;
});
console.log(audAcadem.sort());