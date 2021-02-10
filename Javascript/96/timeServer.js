const net = require('net');
const server = net.createServer( function(socket){
    let date = new Date(); 
    const yr = date.getFullYear();
    const month = (date.getMonth() +1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const hr = date.getHours().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    
    date = `${yr}-${month}-${day} ${hr}:${min}\n`;
    socket.end(date);
})
server.listen(process.argv[2]);