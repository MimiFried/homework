var express = require('express');
var router = express.Router();
const pool = require('../pool');


/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    pool.query('SELECT * FROM recipes', (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
      res.send(results);
    });
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO recipes(recipeName, description, instructions) VALUES (?, ?, ?)',
      [req.body.recipeName, req.body.description, req.body.instructions],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }

        req.body.id = results.insertId;

        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(req.body);
      });
  });

router.route('/:id')
  .get((req, res, next) => {
    pool.query('SELECT * FROM recipes WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.length) {
          return res.sendStatus(404);
        }
        res.send(results[0]);
      });
  })
  .delete((req, res, next) => {
    pool.query('DELETE FROM recipes WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
  })
  .put((req, res, next) => {
    if (result.error) {
      return res.status(500).send(result.error.message);
    }
    pool.query('UPDATE recipes SET recipeName = ?, description = ?, instructions = ? WHERE id = ?',
      [req.body.recipeName, req.body.description, req.body.instructions, req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }
        res.send(results[0]);
      });
  });
module.exports = router;