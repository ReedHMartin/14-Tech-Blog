const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// // Import the Post and User models
// const Post = require('./Post');
// const User = require('./User');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes. DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
  },  
},

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);



module.exports = Comment;
