const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Import the Comment and User models
const Comment = require('./Comment');
const User = require('./User');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

// Define associations for Post model
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = Post;
