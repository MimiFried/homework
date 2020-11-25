import $ from 'jquery';

(function (){
'use strict';

const numInput = document.getElementById('theNum');
const resultElem = $('#result');

const number = Math.floor(Math.random() * 10) + 1;
console.log(number);
numInput.addEventListener('change', () => {
    let guess = Number($('#theNum').val());
    let result;
    if(guess === number){
        result = 'You guessed the right number!!';
    }
    else if(guess > number){
        result = 'You guessed too high';
    }
    else{
        result = 'You guessed too low';
    }
    $(`<div>${guess}: ${result}</div>`).appendTo(resultElem);
  });
})();
