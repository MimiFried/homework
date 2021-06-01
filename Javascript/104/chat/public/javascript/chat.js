(function () {
  const socketIo = io();
  const usersElem = $('#users');

  //socketIo.emit('message', 'This is a message from the client');
  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();

    socketIo.emit('login', $('#name').val(), callbackData => {
      if(callbackData) {
        $('#error').text(callbackData);
      } else {
        loginForm.slideUp();
        $('#messagesContainer').slideDown();
      }
    });
  });

  const messageInput = $('#message');
  $('#messageForm').submit(e => {
    e.preventDefault();
    const msg = messageInput.val().trim();
    if (msg) {
      socketIo.emit('message', {text: messageInput.val(), target: usersElem.val()});
    }
  });
  socketIo.on('dropDownList', fullList => {
    usersElem.empty();
    usersElem.append(`<option value="Everyone">Everyone</option>`);
    usersElem.append(fullList);
  });

  const messagesElem = $('#messages');
  socketIo.on('message', msg => {
    messagesElem.append(`<div>${msg.author} wrote: ${msg.msg}</div>`);
  });
}());