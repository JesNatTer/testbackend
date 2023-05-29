'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    following: DataTypes.INTEGER,
    followers: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};