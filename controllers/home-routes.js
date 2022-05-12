const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

// get all blogs for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Blog.findAll({
      attributes: [
        'id',
        'blog_url',
        'title',
        'created_at',
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbBlogData => {
        const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
  
        res.render('homepage', {
          blogs,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // get single blog
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  

module.exports = router;