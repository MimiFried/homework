window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    function getCss(element, property) {
        //return element.style[property];
        return getComputedStyle(element)[property];
    }

    const theElem = get(id);

    return {
        /*setCss: (property, value) => setCss(theElem, property, value),
        getCss: property => getCss(theElem, property),*/
        css: function (property, value) {
            if (arguments.length < 2) { // get
                return getCss(theElem, property);
            }
            setCss(theElem, property, value);
            return this;
        },
        click: function (callback) {
            theElem.addEventListener('click', callback);
            return this;
        },
        hide: function () {
            setCss(theElem, 'display', 'none');
            return this;
        },
        show: function () {
            setCss(theElem, 'display', 'block');
            return this;
        },
        color: function (color, interval) {
            setCss(theElem, 'color', color);
            console.log(interval);
            setTimeout(function () { setCss(theElem, 'color', '#000'); }, interval);
        }
    };
};