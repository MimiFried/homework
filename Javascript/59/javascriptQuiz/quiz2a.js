// SL - nice
window.app = window.app || {};


window.app.counta = (function (counta) {
    'use strict';
    let counter = 0;

    // SL - this isnt a getCount, its a "print" count...
    counta.getCount = () => console.log(counter);
    counta.incrementCounter = () => counter++;

    return counta;
}(window.app.counta || {}));

