const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
  if (!req.body.name || !req.body.password) {
    return next(new Error('name and password are required'));
  }

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    try{
      const result = await global.users.insertOne({ name: req.body.name, password: hash})
      return res.sendStatus(201);
    }catch(err){
      console.error(err);
      return next(err); 
    }
  });
});

router.post('/login', (req, res, next) => {
  try{
    const user = await global.users.findOne({ name: req.body.name});
    if(!user){
      console.error(err);
      const error = new Error('Invalid name and password');
      error.statusCode = 401;
      return next(error); 
    }
    const thisUser = await bcrypt.compare(req.body.password, user.password);
    if(thisUser){
        req.session.user = req.body.name;
        return res.end();
    }
  } catch(err){
    console.error(err);
    const error = new Error('Invalid name and password');
    error.statusCode = 401;
    return next(error);
  }
});


router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.end('logged out');
});

module.exports = router;
