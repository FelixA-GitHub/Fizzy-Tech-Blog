//here we are collecting the packaged group of API endpoints and prefixing them with the path /api
//packaged all up for server.js

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;