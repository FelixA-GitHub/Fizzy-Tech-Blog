const { Blog } = require('../models');

const blogdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    blog_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    blog_url: 'https://nasa.gov/donec.json',
    user_id: 2
  }
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;