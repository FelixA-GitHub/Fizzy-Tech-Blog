const User = require('./User');
const Blog = require('./Blog');

// create associations
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// User.belongsToMany(Blog, {

// });


module.exports = { User, Blog };