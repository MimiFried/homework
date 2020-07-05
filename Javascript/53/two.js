'use strict';

console.log(name);
console.log(email);

const age = Number(window.prompt('what is your age?', ""));
console.log(age);
if(age>120){
    window.alert("Invalid Entry");
}else{
confirm = window.confirm("confirm: Name "+ name + " Email: "+ email + " Age: "+ age);
}