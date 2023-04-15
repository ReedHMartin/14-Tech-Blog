const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Import the Post and User models
const Post = require('./Post');
const User = require('./User');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

// Define associations for Comment model
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = Comment;
