"use strict";

$(".inner").append(
  '<div id="calculator">' + 

    '<div class="calc-card">' +

      '<button id="clear" value="">C</button>' +
      '<div id="screen" class="screen">0</div>' +

        '<div class="buttons">' +
          '<button class="digit" value="7">7</button>' +
          '<button class="digit" value="8">8</button>' +
          '<button class="digit" value="9">9</button>' +
          '<button class="operator" id="divide" value="/">&#247;</button>' +
          '<button class="digit" value="4">4</button>' +
          '<button class="digit" value="5">5</button>' +
          '<button class="digit" value="6">6</button>' +
          '<button class="operator" id="minus" value="-">-</button>' +
          '<button class="digit" value="1">1</button>' +
          '<button class="digit" value="2">2</button> ' +
          '<button class="digit" value="3">3</button>' +
          '<button class="operator " id="plus" value="+">+</button>' +
          '<button class="digit" value="0">0</button>' +
          '<button class="digit" value=".">.</button>' +
          '<button id="equal">=</button>' +
          '<button class="operator" id="multiply" value="*">x</button>' +
        '</div>'+
      '</div>'+
  '</div>'
);

$(document).ready(function(){
  
  function calculator(){
    let sum = "";
    let len;
    
    let operators = ["+", "-", "*", "/"];
    let inputVal = document.getElementById("screen");
    $(".buttons .digit").on('click', function() {
      let num = $(this).attr('value');
      sum += num;

      $("#screen").html(sum);
    len = inputVal.innerHTML.split("");
    console.log(len);
    });

    $(".buttons .operator").on('click', function(e) {
      e.preventDefault();
      let ops = $(this).attr('value');
      sum += ops;
    });


    $("#equal").on('click', function() {
      let total =  eval(sum);

      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
    });

    $("#clear").on('click', function() {
      sum = "";
        $("#screen").html(0);
    });

    };
    calculator();
});
