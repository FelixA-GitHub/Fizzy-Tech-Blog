//dependencies
//this file collects all the API routes and packages them up
//packaged all up for server.js
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;