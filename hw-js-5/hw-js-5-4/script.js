"use strict";

let audAcadem = [
  { item_tab: 'Название аудитории', item_aud: 231, num_seats: 10, item_facult:"Web"},
  { item_tab: 'Название аудитории', item_aud: 251, num_seats: 14, item_facult:"Designer"},
  { item_tab: 'Название аудитории', item_aud: 271, num_seats: 20, item_facult:"Developer"},
  { item_tab: 'Название аудитории', item_aud: 131, num_seats: 10, item_facult:"Web"},
  { item_tab: 'Название аудитории', item_aud: 151, num_seats: 12, item_facult:"Designer"},
  { item_tab: 'Название аудитории', item_aud: 171, num_seats: 18, item_facult:"Developer"},
];

const grup = [
  { grupsName:'D1', studens:'15', item_facult:"Developer", audienceA: 171, audienceB: 271},
  { grupsName:'D2', studens:'10', item_facult:"Web", audienceA: 131, audienceB: 231},
  { grupsName:'D3', studens:'12', item_facult:"Designer", audienceA: 251, audienceB: 151},
]

function audience (){
  for(let info of audAcadem) {
    console.log (`${info.item_tab}, ${info.item_aud}`);
  }
  console.log("\n");
};

audience();

function seat (){
  for(let info of audAcadem) {
    console.log (`${info.item_tab}, ${info.item_aud}, количесто мест: ${info.num_seats}`);
  }
  console.log("\n");
};

seat ();

function faculty (){
  for(let info of audAcadem) {
    console.log (`${info.item_tab}, ${info.item_aud}, факультет: ${info.item_facult} `);
  }
  console.log("\n");
};

faculty ()

function showAud (){
  for(let info of grup) {
    console.log(`Grup: ${info.grupsName}, students: ${info.studens}, ${info.item_facult}, audience: ${info. audienceA}, ${info. audienceB}.`);
  }
  console.log("\n");
}

showAud(grup.grupsName1);