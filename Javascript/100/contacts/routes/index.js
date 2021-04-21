var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) {
      return next(`Unable to fetch contacts ${error.message}`);
    }
  res.render('layout', {
    title: 'Express',
    contacts: results,
    partials: { content: 'index' }
  });
});
});
router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    partials: { content: 'editContact' }
  });
});

router.post('/addContact', function (req, res, next) {
  db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
     // 
     req.body.id = results.insertId;
     res.status(201);
     res.redirect('/');
    });
});
router.get('/editContact/:id', function (req, res, next) {
  db.query('SELECT * FROM contacts WHERE id = ? LIMIT 1 ',
    [req.params.id],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Unable to update contact ${req.params.id} ${error.message}`));
      }

      if (!results.length) {
        return next(new Error(`Unable to update contact ${req.params.id} - not found`));
      }

    res.render('layout', {
    title: 'Edit Contact',
    contact: results,
    partials: { content: 'editContact' }
  });
});
});
  router.post('/editContact/:id', function (req, res, next) {
    db.query('UPDATE contacts SET firstName = ?, lastName = ?, email = ? , phone = ? WHERE id = ?',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Unable to update contact - ${error.message}`));
      }

      if (!results.affectedRows) {
        return next(new Error(`Unable to update contact ${req.params.id} - not found`));
      }
  res.redirect('/');
});
});
router.get('/deleteContact/:id', function (req, res, next) {
  db.query('DELETE FROM contacts WHERE id = ?', [req.params.id],
  (error, results, fields) => {
    if (error) {
      return next(new Error(`Unable to delete contact ${req.params.id} - ${error.message}`));
    }

    if (!results.affectedRows) {
      return next(new Error(`Unable to delete contact ${req.params.id} - not found`));
    }

    res.redirect('/');
  });
});

router.get('/api/contacts', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(contacts));
});

module.exports = router;
