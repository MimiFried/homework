(function () {
'use strict';

const bank1 = {
    balance: 0,
    performTransaction: function(amnt) { return this.balance + amnt;}
};
const bank2 = {
    balance: 200,
    performTransaction: function(amnt) {  return this.balance - amnt;}
};

console.log(bank1.performTransaction(234));
console.log(bank2.performTransaction(112));

const bank3 = {
    balance: 453
    };

const bank4 = {
    balance: 210
    };

    function transaction(amnt){
         console.log(this.balance - amnt);
    }

    transaction.call(bank3, 111);
    transaction.apply(bank4, [123]);

}());