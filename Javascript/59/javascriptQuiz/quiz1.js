// SL - nice!
// SL - better to put all code in an IIFE, no globals...
'use strict';

const array1 = [2, 4, 6];

function myMap(array, callback) {
  const array2 = [];
  //const array2 = array;  why does this not work? How do the values of array2 get returned to array after the callback?

  // SL - not sure I understand the question. array2 = array would make array2 another reference to the original array with the original items in it. We dont want the original items returned from this function, we want the new items only.
  // array2 = [] creates a new empty array that we populate with the new items and return
  // let me know if you still have a question here.
  for (let i = 0; i < array.length; i++) {
    array2[i] = callback(array[i]);
  }
  return array2;
}

const test1 = myMap(array1, elem => elem * 2);
console.log(test1);

console.log(array1);

