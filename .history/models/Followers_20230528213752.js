'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    follower_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    followee_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return Followers;
};