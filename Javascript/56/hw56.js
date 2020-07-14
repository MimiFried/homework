

const dayOfWeek = (function (){
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    return{
        getDayName: function (index){
            return days[index-1];
        },
        getDayNumber: function (name){
            return days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) +1;
        }
    };
}());
console.log(dayOfWeek.getDayName(2));
console.log(dayOfWeek.getDayNumber("Sunday"));

const interest = (function (){
    'use strict';

    let interestRate;
    let years= 0;

    return{
        setRate: function(rate){
            return (interestRate = rate);
        },
        calculateInterest: function(principle){
            return (principle*(1 + (interestRate/100)* years));
        },
        setYears: function(yrs){
           return (years = yrs);
        }
    };
}());

console.log('rate ', interest.setRate(3.875), 'years ', interest.setYears(5), 'principle: 10,000','calculate', interest.calculateInterest(10000));