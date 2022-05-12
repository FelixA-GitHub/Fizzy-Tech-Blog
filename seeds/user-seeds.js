const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'fizzyboywonder',
        password: 'password123'
    },
    {
        username: 'supertired',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;