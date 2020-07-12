"use strict";

const letters = ['a', 'B', 'c'];

function isEvery(theArray, callback){
   let x = true;
 theArray.forEach(elem => {
     if(! callback(elem)){
        x = false;
     }
 }); return x;
}

function isUpperCase(letter){
return letter === letter.toUpperCase();
}

const uppers = isEvery(letters, letter => letter === letter.toUpperCase());
console.log('uppers', uppers);

const isUppers = isEvery(letters, isUpperCase);
console.log('isUppers', isUppers);

const isLower = isEvery(letters, letter => !isUpperCase(letter));
console.log('isLower', isLower);

console.log(letters.every(isUpperCase));

function isSome(theArray, callback){
    let x = false;
    theArray.forEach(elem => {
        if(callback(elem)){
           x = true;
        }
    }); return x;
   }

const someUpper = isSome(letters, isUpperCase);
console.log('someUpper', someUpper);

console.log(letters.some(isUpperCase));

function onlyIf(theArray, callback, action){
    theArray.forEach(elem => {
        if(callback(elem)){
            action(elem);
        }
    });
}

function multiplyByTwo(elem){
    numbers[elem-1]= elem * 2;
}

const numbers = [1, 2, 3, 4];

const tester = onlyIf(numbers, num => num % 2 === 0, multiplyByTwo);
console.log(numbers);


function onlyIfTwo(theArray, callback, action){
   const result = theArray.filter(callback(elem));
          result.forEach(elem => action(elem));
        }

        const tester2 = onlyIf(numbers, num => num % 2 !== 0, multiplyByTwo);
        console.log(numbers);
             