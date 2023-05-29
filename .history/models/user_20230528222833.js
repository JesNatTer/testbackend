'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      this.hasMany(Post), {onDelete: 'Cascade'}
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
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