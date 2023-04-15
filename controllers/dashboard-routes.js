const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

// Get all posts for the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts-admin', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// Add route for creating a new post
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});


// Add route for handling new post form submission
router.post('/new', withAuth, async (req, res) => {
  try {
    const newPostData = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Get a specific post for the logged-in user
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

// TODO: Add route for handling post update form submission

// TODO: Add route for handling post deletion

module.exports = router;
