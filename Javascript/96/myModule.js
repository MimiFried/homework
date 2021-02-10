'use strict';
const fs = require('fs');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, (err, list)=> {
        if(err){
            return callback(err);
        }
        const filteredFiles = [];
        list.forEach(file =>{
            if(file.endsWith('.'+ ext)){
                filteredFiles.push(file);
            }
        });
        callback(null, filteredFiles);
    });
};