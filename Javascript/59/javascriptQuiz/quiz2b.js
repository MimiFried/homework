window.app = window.app || {};


window.app.countb = (function (countb) {
    'use strict';
    let mainCounter = 0;

    countb.createCounter = function createCounter() {
        mainCounter++;
        let counter = 0;
        return {
            // SL - returning this allows anyone to change it, it should be private
            // you didnt include this in quiz2a version, why add it here?
            counter: counter,
            getCount: () => console.log(counter),

            incrementCounter: function () {
                // SL - if returning something from this function, wouldnt new count make more sense?
                // your doing a postincrement so returned value is old value of counter before increment
                return counter++;
            }
        };

    };
    countb.getCount = () => console.log(mainCounter);
    return countb;
}(window.app.countb || {}));


