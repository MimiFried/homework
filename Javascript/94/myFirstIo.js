const fs = require('fs');
const file = fs.readFileSync(process.argv[2]);
const splitFile = file.toString().split('\n').length - 1;

console.log(splitFile);