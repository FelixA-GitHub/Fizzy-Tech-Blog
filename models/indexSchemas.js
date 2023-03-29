const mongoose = require("mongoose");
const schema = mongoose.Schema;

//blog
let blogsSchema = new schema({
  id: {
    type: Number,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: String,
    allowNull: false,
    required: true,
  },
  blog_url: {
    type: String,
    allowNull: false,
    validate: {
      isURL: true,
    },
    required: true,
  },
  user_id: {
    type: schema.Types.ObjectId,
    ref: {
      model: "user",
      key: "id",
    },
  },
});

//comment
let commentsSchema = new schema({
  id: {
    type: Number,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_text: {
    type: String,
    allowNull: false,
    validate: {
      len: [1],
    },
    required: true,
  },
  user_id: {
    type: schema.Types.ObjectId,
    ref: {
      model: "user",
      key: "id",
    },
  },
  blog_id: {
    type: schema.Types.ObjectId,
    ref: {
      model: "blog",
      key: "id",
    },
  },
});
//user
let usersSchema = new schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: String,
      allowNull: false,
    },
    password: {
      type: String,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
  }
);

let blogs = mongoose.model("blogs", blogsSchema, "blog");
let comments = mongoose.model("comments", commentsSchema, "comment");
let users = mongoose.model("users", usersSchema, "user");

let mySchemas = { blogs: blogs, comments: comments, users: users };

module.exports = mySchemas;
