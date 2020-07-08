'use strict';

function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 2));
console.log(multiply(2, 5));
console.log(multiply(3, 6));

function getMultiplier1() {
    return function (x, y) {
        return x * y;
    }
}

const multiplier = getMultiplier1();
console.log(multiplier(2, 2));
console.log(multiplier(2, 5));
console.log(multiplier(3, 6));

function getMultiplier(a) {
    return function (b) {
        return a * b;
    }
}

var multiplyByFive = getMultiplier(5);
console.log(multiplyByFive(2));

var multiplyBySix = getMultiplier(6);
console.log(multiplyBySix(2));