import $ from 'jquery';
import './style.css';

(function(){
    'use strict';
const budgetInput = $('#budgetInput');
const expenseInput = $('#expenseInput');
const expenseAmtInput = $('#expenseAmtInput');    
const expensesGrid = $('#expenseDetails');


$('#budgetBtn').on('click', () => {
    $('#budgetNum').html = budgetInput.val();
});

$('#expenseBtn').on('click', () => {
    $('#expensesNum').html += expenseAmtInput.val();
    $(`${expenseInput.val()}  ${expenseAmtInput.val()}`).appendTo(expensesGrid);
    $('#balanceNum').html -= expenseAmtInput.val();
});
})();