const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketIo = require("socket.io")(server);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const chatters = [];
socketIo.on("connection", socket => {
  console.log('server got a connection');

  //socket.emit('message', 'This is a message from the server');

  //socket.on('message', msg => console.log(msg));

  let name;
  let users;
  socket.on('login', (loginName, callback) => {
    const n = loginName.trim();
    if (!n) {
      callback(`Username is required.`);
    }

    if (chatters.find(c => c === n)) {
      callback(`Username ${n} already used. Please choose another.`);
    } else {
      name = n;
      chatters.push({ name: name, socket: socket });
      callback();
      users = setDropdown(chatters);
      socketIo.emit('dropDownList', users);

      socket.on('message', msg => {
        const m = msg.text.trim();
        if (m) {
          if (msg.target === "Everyone") {
            socketIo.emit('message', { author: name, msg: msg.text, dm: false });
          } 
          else {
          let  dm = chatters.find(c => c.name === msg.target);
            dm.socket.emit('message', { author: name, msg: msg.text, dm: true });
            if (dm.socket !== socket) {
              socket.emit('message', { author: name, msg: msg.text, dm: true });
            }
          }
        }
      });
    }
  });
});

function setDropdown(chatters) {
  let chatList = '';
  if (chatters.length > 0) {
    chatters.forEach(chatter => {
      chatList = chatList.concat(`<option value="${chatter.name}">${chatter.name}</option>`)
    });
  }
  return chatList;
}

app.use('/', (req, res, next) => {
  res.send('Hello World!');
});

server.listen(80);