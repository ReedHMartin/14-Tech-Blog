const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// // Import the Comment and User models
// const Comment = require('./Comment');
// const User = require('./User');

class Post extends Model {}

Post.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    body: {
      type: DataTypes.STRING,
    allowNull: false,
  },
    createdAt: {
      type: DataTypes. DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      Key: "id",
    },
  },
},

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);



module.exports = Post;
