const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongo = require('mongodb');
const client = new mongo.MongoClient('mongodb+srv://testUser1:testUser1@cluster0.ovvqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true });

let posts;
(async () => {
  await client.connect();
  const db = client.db('blogs');
  posts = db.collection('posts');
})().catch(err => console.error(err));

app.locals.title = 'PCS MERN Blog'

app.get('/', async (req, res, next) => {
  const thePosts = await posts.find().toArray();
  res.render('layout', {
    subtitle: 'Blog Posts',
    links: [{ url: '/addPost', name: 'add post' }],
    posts: thePosts,
    partials: { content: 'posts' }
  });
});

app.route('/addPost')
  .get((req, res, next) => {
    res.render('layout', {
      subtitle: 'Add Post',
      links: [{ url: '/', name: 'home' }],
      partials: { content: 'addPost' }
    });
  })
  .post(async (req, res, next) => {
    const post = {
      title: req.body.title,
      body: req.body.body,
      date: new Date(),
      author: 'me'
    };

    await posts.insertOne(post);
    res.redirect('/');
  });
  app.post('/addComment/:id', async (req,res,next)=>{
    const newComment = {
      body: req.body.body,
      author: 'me',
      date: new Date()
    };
    await posts.updateOne(
      { _id: mongo.ObjectId(req.params.id) },
      {
          $push: {
              comments: newComment
          }
      }
  );
  res.status(201);
  });

app.listen(80);