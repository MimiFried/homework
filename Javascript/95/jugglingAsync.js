'use strict';
const http = require('http');
const order = [];
let count = 0;
function getHttp(url, index){
    http.get(url, response => {
        let fullStream = '';
        response.setEncoding('utf-8');
        response.on('data', data => fullStream += data);
        response.on('end', () => {
            order[index]=fullStream;
            count++
            if(count === 3){
                order.forEach(r =>console.log(r));
            }
        });
        response.on('error', err => console.log(err));
    });
}

for(let i = 2; i <process.argv.length; i++){
    getHttp(process.argv[i], i-2);
}