'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
       model: 'user',
       key: 'id' 
      }
    },
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return Post;
};