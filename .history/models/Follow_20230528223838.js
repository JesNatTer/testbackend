'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      this.belongsToMany(User), {foreignKey: 'user_id'}
    }
  }
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