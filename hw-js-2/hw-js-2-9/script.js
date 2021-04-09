"use strict";

let table, row, cell, i, j;

  table = document.createElement('table');
  table.style.textAlign = 'right';
  table.style.fontFamily = 'Franklin Gothic Medium';
  table.style.backgroundColor = 'grey';
  table.style.margin = '0 auto';

  for ( i = 1; i < 11; i++ ) {
    row = document.createElement('tr');

    for ( j = 1; j < 10; j++ ) {
      cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
      cell.appendChild(document.createTextNode(i*j));
      cell.style.padding = '15px';
      cell.style.color = '#fff';
      cell.style.background = 'rgba(255, 115, 0, 0.849)';
      cell.style.width = 100 / 9 + '%';
      row.appendChild(cell);
    }

  table.appendChild( row );
  }

  document.body.appendChild( table );

  //вариант через 2
  /*function table() {
  let x=prompt ( "Enter a number:", 2 );
  let alertBody = '';
  for ( let i = 1; i < 10; i++ ) {
    alertBody += x + "*" + i + "=" + x*i + '\n';
  }
  alert( alertBody );
}
table();*/
