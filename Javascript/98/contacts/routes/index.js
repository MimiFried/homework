var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Express',
    contacts: [
      {
        firstName: "Joe",
        lastName: "Brown",
        phone: "732-234-4567",
        email: "12jb@gmail.com"

      },
      {
        firstname: "Jack",
        lastName: "Brown",
        phone: "732-234-4987",
        email: "34jb@gmail.com"
      }
    ],
    partials: { content: 'index' }
  });
});

router.get('/api/contacts', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify([
  {
    firstName: "Joe",
    lastName: "Brown",
    phone: "732-234-4567",
    email: "12jb@gmail.com"
  },
  {
    firstName: "Jack",
    lastName: "Brown",
    phone: "732-234-4987",
    email: "34jb@gmail.com"
  }]));
});

module.exports = router;
