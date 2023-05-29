'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate() {
      this.belongsToMany(User), {foreignKey: 'user_id'}
    }
  }
  Follow.init({
    follower_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    followee_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return Followers;
};