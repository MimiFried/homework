'use strict';
const fs = require('fs');

fs.readdir(process.argv[2], (err, list)=> {
    if(err){
        return console.log(err);
    }
    list.forEach(file =>{
        if(file.endsWith('.' + process.argv[3])){
            console.log(file);
        }
    });

});