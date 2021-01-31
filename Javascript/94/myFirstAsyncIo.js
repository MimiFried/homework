const fs = require('fs');
const file = fs.readFile(process.argv[2], (err, file) =>{
    if (err) { 
    return console.error(err);
    }

const splitFile = file.toString().split('\n').length - 1;

console.log(splitFile);
});