'use strict';
const http = require('http');

http.get(process.argv[2], response => {
    let fullStream = '';
    response.setEncoding('utf-8');
    response.on('data', data => fullStream += data);
    response.on('end', () => {
        console.log(fullStream.length);
        console.log(fullStream);
    });
    response.on('error', err => console.log(err));

});