//dependencies
//this file collects all the API routes and packages them up
//packaged all up for server.js
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;