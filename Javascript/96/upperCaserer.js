const http = require('http');
const map = require('through2-map');

http.createServer((req, res)=>{
    if (req.method !== 'POST') {
        res.statusCode = 400;
        return res.end('Post Required');
      }
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
}).listen(process.argv[2]);