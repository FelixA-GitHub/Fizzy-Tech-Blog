// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create our Blog model
// class Blog extends Model { }

// // create fields/columns for Blog model
// Blog.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     blog_url: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isURL: true
//       }
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blog'
//   }
// );

// module.exports = Blog;
