"use strict";

let audAcadem = [
  { itemTab: 'Audience name', itemAud: 231, numSeats: 10, itemFaculty:"Web"},
  { itemTab: 'Audience name', itemAud: 251, numSeats: 14, itemFaculty:"Designer"},
  { itemTab: 'Audience name', itemAud: 271, numSeats: 20, itemFaculty:"Developer"},
  { itemTab: 'Audience name', itemaud: 131, numSeats: 10, itemFaculty:"Web"},
  { itemTab: 'Audience name', itemAaud: 151, numSeats: 12, itemFaculty:"Designer"},
  { itemTab: 'Audience name', itemAud: 171, numSeats: 18, itemFaculty:"Developer"},
];

const grup = [
  { grupsName:'D1', studens:'15', itemFaculty:"Developer", audienceA: 171, audienceB: 271},
  { grupsName:'D2', studens:'10', itemFaculty:"Web", audienceA: 131, audienceB: 231},
  { grupsName:'D3', studens:'12', itemFaculty:"Designer", audienceA: 251, audienceB: 151},
]

function audience() {
  for(let info of audAcadem) {
    console.log (`${info.itemTab}, ${info.itemAud}`);
  }
  console.log("\n");
};

audience();

function seat() {
  for(let info of audAcadem) {
    console.log (`${info.itemTab}, ${info.itemAud}, number of seats: ${info.numSeats}`);
  }
  console.log("\n");
};

seat ();

function faculty() {
  for(let info of audAcadem) {
    console.log (`${info.itemTab}, ${info.itemAud}, faculty: ${info.itemFaculty} `);
  }
  console.log("\n");
};

faculty ()
/*
function showAud() {
  for(let info of grup) {
    console.log(`Grup: ${info.grupsName}, students: ${info.studens}, ${info.item_faculty}, audience: ${info. audienceA}, ${info. audienceB}.`);
  }
  console.log("\n");
}

showAud ();*/

function showAud() {

}

//переделать добавить функции в массивы и разбить все отдельно для вызова