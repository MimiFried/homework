var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    firstName: "Joe",
    lastName: "Brown",
    phone: "732-234-4567",
    email: "12jb@gmail.com"
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Brown",
    phone: "732-234-4987",
    email: "34jb@gmail.com"
  }];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Express',
    contacts: contacts,
    partials: { content: 'index' }
  });
});
router.get('/editContact/:id', function (req, res, next) {
  const contact = contacts.find(c => c.id === +req.params.id);
  res.render('layout', {
    title: 'Edit Contact',
    contact: contact,
    partials: { content: 'editContact' }
  });
});
  router.post('/editContact/:id', function (req, res, next) {
    const contact = contacts.find(c => c.id === +req.params.id);

  Object.assign(contact, req.body);
  res.redirect('/');
});

router.get('/deleteContact/:id', function (req, res, next) {
  contacts = contacts.filter(c => c.id !== +req.params.id);

  res.redirect('/');
});

router.get('/api/contacts', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(contacts));
});

module.exports = router;
