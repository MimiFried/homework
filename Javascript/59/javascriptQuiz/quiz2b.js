window.app = window.app || {};


window.app.countb = (function (countb) {
    'use strict';
    let mainCounter = 0;

    countb.createCounter = function createCounter() {
        mainCounter++;
        let counter = 0;
        return {
            counter: counter,
            getCount: () => console.log(counter),

            incrementCounter: function () {
                return counter++;
            }
        };

    };
    countb.getCount = () => console.log(mainCounter);
    return countb;
}(window.app.countb || {}));


