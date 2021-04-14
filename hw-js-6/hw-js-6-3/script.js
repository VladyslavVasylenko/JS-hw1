"use strict";

const style = [
  { id: 1, fontFamily: 'font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;',},
  { id: 2, fontSize: 'font-size:18px;',},
  { id: 3, color:'color:green;',},
  { id: 4, textAlign:'text-align:center;',},
  { id: 5, fontStyle: 'font-style:italic;',},
  { id: 6, textDecoration: 'text-decoration: underline;',},
]

function documentStyle (){
  let fontFam = style.find(item => item.id == 1);
  let fontSiz = style.find(item => item.id == 2);
  let color = style.find(item => item.id == 3);
  let textAlign = style.find(item => item.id == 4);
  let fontSty = style.find(item => item.id == 5);
  let textDecoration = style.find(item => item.id == 6);

  document.write('<p style="' + textDecoration.textDecoration + ' ' + fontFam.fontFamily + ' ' + fontSty.fontStyle + ' ' + color.color + ' ' + textAlign.textAlign + ' ' + fontSiz.fontSize + ' ' + '">' + 'Hello World is I Vlad! I want to know JS!' + '</p>');
}

documentStyle();