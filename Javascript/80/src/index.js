import $ from 'jquery';
import './css/index.css'; 
import apple from './images/redapple.png';

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
        //const appleImage = new Image();
        //appleImage.src = apple;
        //$(document.body).append(appleImage);
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
