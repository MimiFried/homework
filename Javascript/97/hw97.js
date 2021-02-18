
const app = require('connect')();

app.use('/home', (req, res, next) => {
  res.end('home page');
});



app.use(require('./queryParser'));

app.use((req, res, next)=>{
    if(req.query.magic === 'please'){
        return next();
    }
    next('What is the magic word?');
});

app.use('/about', (req, res, next) => {
    res.end('about page!!');
  });

app.use('/contacts', (req, res, next) => {
  res.end('contacts page');
});

app.listen(80);