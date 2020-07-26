'use strict';

const array1 = [2, 4, 6];

function myMap(array, callback) {
  const array2 = [];
  //const array2 = array;  why does this not work? How do the values of array2 get returned to array after the callback?
  for (let i = 0; i < array.length; i++) {
    array2[i] = callback(array[i]);
  }
  return array2;
}

const test1 = myMap(array1, elem => elem * 2);
console.log(test1);

console.log(array1);

